
import { GoogleGenAI } from "@google/genai";

export async function getFitnessAdvice(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are 'Denny', an AI fitness assistant for Infinity Fitness Den in Bhubaneswar. You are energetic, motivating, and helpful. You provide advice on workouts, nutrition, and gym services. Keep responses concise and use a bit of gym slang like 'Let's crush it!' or 'No pain, no gain'. If asked about location, we are in Sundarpada, Bhubaneswar.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Hey there! I'm having a little trouble connecting to my gains database. How else can I help you today?";
  }
}
