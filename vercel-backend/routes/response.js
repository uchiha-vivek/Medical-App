const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/query', async (req, res) => {
    const { question } = req.body;
    try {
        const response = await axios.post(
            'https://api.gemini.com/v1/engines/stress-query/completions',
            {
                prompt: question,
                max_tokens: 150,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('Gemini API response:', response.data.choices[0].text.trim());
        res.json(response.data.choices[0].text.trim());
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(error.message);
    }
});

module.exports = router;
