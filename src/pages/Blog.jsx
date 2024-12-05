import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header_about from '../components/Header_about';
import Footer from '../components/Footer';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch blog posts
        const fetchBlogs = async () => {
            const response = await fetch('http://localhost:5000/api/blogs');
            const data = await response.json();
            setBlogs(data);

            // Extract unique categories
            const uniqueCategories = [...new Set(data.map((blog) => blog.category))];
            setCategories(uniqueCategories);
        };

        fetchBlogs();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header_about />
            <div className="flex flex-grow">
                {/* Sticky Sidebar */}
                <aside className="hidden md:block w-1/4 sticky top-0 h-screen bg-gray-100 p-8 shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Categories</h2>
                    <ul className="space-y-4 text-gray-700">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link to="#" className="hover:text-orange-500">
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Blog Posts */}
                <main className="w-full md:w-3/4 p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Latest Blog Posts</h1>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <article key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={blog.image || 'https://via.placeholder.com/400'} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
                                    <p className="text-gray-600 mb-4">{blog.content.slice(0, 100)}...</p>
                                    <Link
                                        to={`/blog/${blog._id}`}
                                        className="text-orange-500 font-semibold hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
