const Anthropic = require('@anthropic-ai/sdk').default;

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a friendly assistant for KBL Web Solutions, a professional web development agency based in Pleasant Hill, California.

About KBL Web Solutions:
- Phone: +1 (925) 334-8542
- Address: 1978 Contra Costa Blvd, Pleasant Hill, CA 94523
- Experience: 3+ years, 50+ projects built
- Services: Custom websites, business sites, e-commerce, React apps, landing pages
- Tech stack: React, JavaScript, Tailwind CSS, Node.js
- Approach: Client-focused, fast delivery, clean modern designs built around your business goals

Your role:
- Answer questions about services, process, and general web development topics
- Help potential clients understand what we offer
- For pricing, say it varies by project and encourage them to call or fill out the contact form for a free consultation
- Keep replies short and conversational — 2 to 3 sentences max unless more detail is clearly needed
- If someone wants to get started, direct them to call (925) 334-8542 or scroll to the Contact section

Never invent specific prices. Be warm, professional, and helpful.`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 400,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages,
    });

    const reply = response.content[0]?.text
      ?? "Sorry, I couldn't process that. Please call us at (925) 334-8542.";

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Claude API error:', error);
    res.status(500).json({
      reply: "I'm having trouble right now. Please call us at (925) 334-8542 or fill out the contact form!",
    });
  }
};
