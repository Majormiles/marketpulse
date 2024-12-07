import React, { useEffect, useState, useRef } from 'react';
import './Chat.css';
import { AiOutlineMessage, AiOutlinePlus } from 'react-icons/ai';
import { GrEmoji } from 'react-icons/gr';
import { IoSend } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { add_friend, send_message, updateMessage, messageClear } from '../../store/reducers/chatReducer';
import toast from 'react-hot-toast';

const socket = io('https://marketpulse-api.onrender.com');

const Chat = () => {
  const scrollRef = useRef();

  const dispatch = useDispatch();
  const { sellerId } = useParams();
  const [text, setText] = useState('');
  const [receiverMessage, setReceiverMessage] = useState('');
  const [activeSeller, setActiveSeller] = useState([]);
  const { userInfo } = useSelector(state => state.auth);
  const { fd_messages, currentFd, my_friends, successMessage } = useSelector(state => state.chat);

  useEffect(() => {
    socket.emit('add_user', userInfo.id, userInfo);
  }, []);

  useEffect(() => {
    dispatch(add_friend({
      sellerId: sellerId || "",
      userId: userInfo.id,
    }));
  }, [sellerId]);

  const send = () => {
    if (text) {
      dispatch(send_message({
        userId: userInfo.id,
        text,
        sellerId,
        name: userInfo.name,
      }));
      setText('');
    }
  };

  useEffect(() => {
    socket.on('seller_message', msg => {
      setReceiverMessage(msg);
    });
    socket.on('activeSeller', (sellers) => {
      setActiveSeller(sellers);
    });
  }, []);

  useEffect(() => {
    if (successMessage) {
      socket.emit('send_customer_message', fd_messages[fd_messages.length - 1]);
      dispatch(messageClear());
    }
  }, [successMessage]);

  useEffect(() => {
    if (receiverMessage) {
      if (sellerId === receiverMessage.senderId && userInfo.id === receiverMessage.receiverId) {
        dispatch(updateMessage(receiverMessage));
      } else {
        toast.success(`${receiverMessage.senderName} sent a message`);
        dispatch(messageClear());
      }
    }
  }, [receiverMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [fd_messages]);

  return (
    <div className='chat-container'>
      <div className='sidebar'>
        <div className='flex justify-left gap-3 items-center text-slate-600 text-xl h-[50px]'>
          <span><AiOutlineMessage /></span>
          <span>Message</span>
        </div>
        <div className='w-full flex flex-col text-slate-600 py-4 h-[400px] pr-3'>
          {my_friends.map((f, i) => (
            <Link to={`/dashboard/chat/${f.fdId}`} key={i} className={`flex gap-2 justify-start items-center pl-2 py-[5px]`}>
              <div className='w-[30px] h-[30px] rounded-full relative'>
                {activeSeller.some(c => c.sellerId === f.fdId) && <div className='w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0'></div>}
                <img src="http://localhost:3000/images/user.png" alt="" />
              </div>
              <span>{f.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className='chat-area'>
        {currentFd ? (
          <div>
            <div className='flex justify-start gap-3 items-center text-slate-600 text-xl h-[50px]'>
              <div className='w-[30px] h-[30px] rounded-full relative'>
                {activeSeller.some(c => c.sellerId === currentFd.fdId) && <div className='w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0'></div>}
                <img src="http://localhost:3000/images/user.png" alt="" />
              </div>
              <span>{currentFd.name}</span>
            </div>
            <div className='messages' ref={scrollRef}>
              {fd_messages.map((m, i) => (
                <div key={i} className={`w-full flex gap-2 ${m.senderId !== userInfo.id ? 'justify-start' : 'justify-end'} items-center`}>
                  <img className='w-[30px] h-[30px]' src="http://localhost:3000/images/user.png" alt="" />
                  <div className={`p-2 rounded-md ${m.senderId !== userInfo.id ? 'bg-purple-500 text-white' : 'bg-cyan-500 text-white'}`}>
                    <span>{m.message}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='message-input'>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder='Input message'
                className='rounded-full p-3 w-[80%]'
              />
              <div className='w-[40px]' onClick={send}>
                <IoSend />
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center text-lg font-bold text-slate-600'>
            <span>Select a seller</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
