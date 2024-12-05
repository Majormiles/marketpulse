// botpressService.js
export const sendToBotpress = async (message) => {
    try {
        const response = await fetch('https://webhook.botpress.cloud/c0693281-5bd9-41c4-bbc8-1d70e1ec2240', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: message })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send message to Botpress');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error communicating with Botpress:', error);
    }
};
