
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { inputs } = req.body;
    // Vercel-এর গোপন লকার থেকে আপনার Key-টা এখানে নিজে নিজে চলে আসবে
    const API_TOKEN = process.env.HF_API_KEY; 
    const API_URL = "https://api-inference.huggingface.co/models/facebook/mms-tts-ben";

    try {
        const response = await fetch(API_URL, {
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ inputs })
        });

        if (response.status === 503) {
             return res.status(503).json({ error: "এআই সার্ভার ঘুমিয়ে ছিল, এখন চালু হচ্ছে। ২০ সেকেন্ড পর আবার বাটনে চাপ দিন!" });
        }

        if (!response.ok) {
            return res.status(response.status).json({ error: "AI সার্ভার সমস্যা করছে।" });
        }

        // এআই থেকে আসা আসল ভয়েস (Audio) রিসিভ করা
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        res.setHeader('Content-Type', 'audio/flac');
        res.send(buffer);
    } catch (error) {
        res.status(500).json({ error: "সার্ভার এরর" });
    }
}
