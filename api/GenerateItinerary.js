// File: api/generateItinerary.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { tripDetails } = req.body;
      console.log('Received trip details:', tripDetails);
      
  
      try {
        const geminiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.VITE_GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [{ text: tripDetails.prompt }],
                },
              ],
            }),
          }
        );
  
        const data = await geminiResponse.json();
        console.log(data);
        res.status(200).json(data);
      } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate itinerary.' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  