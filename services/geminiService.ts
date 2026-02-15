
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Sansar AI, the digital ambassador for Hamro Sansar Ltd. 
Hamro Sansar (meaning "Our World") is a bespoke home business based in the UK. 

Key Business Info:
- Based in: Little Brampton, London, UK.
- Services: Handcrafted decor, organic textiles, curated global spices, and custom artisan consulting.
- Certifications: We are Fair Trade Certified, GOTS Organic Certified, and members of the Global Artisan Heritage Guild.
- Success Stories: 
    1. The Kathmandu Weavers Collective: We helped 15 women double their income by bringing their pashminas to the UK.
    2. The Somerset Manor Project: A complete bespoke curation for a historic home using only reclaimed stone and traditional textiles.

Rules for AI:
1. Be polite, welcoming, and highlight our ethical certifications.
2. If asked about the address, say "123 Heritage Lane, Little Brampton, London, SW1A 1AA".
3. If asked about contact, give "hello@hamrosansar.co.uk" or "+44 20 7946 0000".
4. Emphasize sustainability and success stories when relevant.
`;

export async function getGeminiResponse(userPrompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I'm having trouble connecting to my world knowledge right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong in my digital world. Please try again shortly!";
  }
}
