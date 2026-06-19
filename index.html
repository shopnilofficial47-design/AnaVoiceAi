<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bengali AI Voice Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e1e2f;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: #2a2a40;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            width: 100%;
            max-width: 450px;
            text-align: center;
        }
        h2 {
            margin-bottom: 20px;
            color: #00d2ff;
        }
        textarea {
            width: 100%;
            height: 120px;
            padding: 15px;
            border: 1px solid #444;
            border-radius: 8px;
            background: #1e1e2f;
            color: white;
            margin-bottom: 20px;
            font-size: 16px;
            resize: none;
            box-sizing: border-box;
        }
        button {
            background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            transition: opacity 0.3s;
        }
        button:hover {
            opacity: 0.8;
        }
        button:disabled {
            background: #555;
            cursor: not-allowed;
        }
        #status-text {
            color: #00d2ff;
            margin-top: 15px;
            font-size: 14px;
            display: none;
        }
        audio {
            width: 100%;
            margin-top: 20px;
            display: none;
            border-radius: 8px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>বাংলা AI ভয়েস জেনারেটর</h2>
        <p style="font-size: 13px; color: #aaa; margin-top: -10px;">Powered by Hugging Face AI</p>
        
        <textarea id="text-input" placeholder="এখানে বাংলায় কিছু লিখুন..."></textarea>
        
        <button id="generate-btn">ভয়েস তৈরি করুন</button>
        
        <p id="status-text">এআই মডেল ভয়েস তৈরি করছে, দয়া করে কয়েক সেকেন্ড অপেক্ষা করুন...</p>
        <audio id="audio-player" controls></audio>
    </div>

    <script>
        // আপনার দেওয়া Hugging Face API Key
        const API_TOKEN = "Hf_FjkNLCQOtjCKZKsaQKgGfKjcPAvtkxpqxh"; 
        
        // এআই মডেলের লিংক (Meta এর বাংলা মডেল)
        const API_URL = "https://api-inference.huggingface.co/models/facebook/mms-tts-ben";

        const textInput = document.getElementById('text-input');
        const generateBtn = document.getElementById('generate-btn');
        const statusText = document.getElementById('status-text');
        const audioPlayer = document.getElementById('audio-player');

        generateBtn.addEventListener('click', async () => {
            const text = textInput.value.trim();
            
            if (!text) {
                alert("দয়া করে বক্সে কিছু লিখুন!");
                return;
            }

            // UI আপডেট (লোডিং বোঝানোর জন্য)
            generateBtn.disabled = true;
            statusText.style.display = "block";
            audioPlayer.style.display = "none";

            try {
                // এআই সার্ভারে রিকোয়েস্ট পাঠানো
                const response = await fetch(API_URL, {
                    headers: { 
                        "Authorization": `Bearer ${API_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({ inputs: text }),
                });

                if (!response.ok) {
                    throw new Error("AI মডেল এই মুহূর্তে ব্যস্ত আছে। একটু পর আবার চেষ্টা করুন।");
                }

                // এআই থেকে আসা অডিও ফাইল (Blob) রিসিভ করা
                const audioBlob = await response.blob();
                const audioUrl = URL.createObjectURL(audioBlob);

                // অডিও প্লেয়ারে যুক্ত করা
                audioPlayer.src = audioUrl;
                audioPlayer.style.display = "block";
                
                // স্বয়ংক্রিয়ভাবে অডিও প্লে করা
                audioPlayer.play();

            } catch (error) {
                alert(error.message);
            } finally {
                // কাজ শেষ হলে UI স্বাভাবিক করা
                generateBtn.disabled = false;
                statusText.style.display = "none";
            }
        });
    </script>

</body>
</html>
