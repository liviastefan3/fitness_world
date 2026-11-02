require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
// Google Cloud Run setează automat variabila de mediu PORT (de obicei 8080)
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Servește fișierele statice din folderul curent (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Endpoint-ul API pentru chat
app.post('/api/chat', async (req, res) => {
    const { mesaj } = req.body;

    if (!mesaj) {
        return res.status(400).json({ error: "Mesajul lipsește." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: "Cheia API nu este configurată pe server." });
    }

    const promptSistem = `Ești un antrenor personal certificat de fitness. Răspunde strict în limba română, scurt și aplicat (maxim 3 fraze), oferind alternative concrete pentru următoarea cerință: "${mesaj}"`;

    try {
        const geminiResponse = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": apiKey
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: promptSistem }]
                }]
            })
        });

        const data = await geminiResponse.json();

        if (data.error) {
            return res.status(500).json({ error: data.error.message });
        }

        const raspunsText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Nu am primit un răspuns valid.";
        res.json({ raspuns: raspunsText });

    } catch (err) {
        console.error("Eroare server:", err);
        res.status(500).json({ error: "Eroare la comunicarea cu AI." });
    }
});

// Orice altă rută returnează index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});