// api/generate.ts
import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { genre } = await req.json();
    
    const ai = new GoogleGenAI({ apiKey });
    
    const questionTypes = ['Inferencia', 'Información Explícita', 'Opinión Personal', 'Vocabulario en Contexto'];
    const selectedType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    const prompt = `
      Escribe un micro-cuento para niños de 4to básico (aprox 60-80 palabras) sobre el género: "${genre}".
      
      Después, formula una pregunta de tipo "${selectedType}" basada en el cuento.
      - Si es "Inferencia", la respuesta no debe estar escrita, hay que deducirla.
      - Si es "Información Explícita", la respuesta debe estar textual.
      - Si es "Opinión Personal", la pregunta debe invitar a juzgar una acción.
      - Si es "Vocabulario", pregunta por el significado de una palabra difícil usada en el cuento.

      Devuelve la respuesta SOLAMENTE en este formato JSON:
      {
        "story": "texto del cuento aquí...",
        "questionType": "${selectedType}",
        "question": "¿La pregunta aquí?",
        "answer": "La respuesta o guía de respuesta esperada"
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    return new Response(text, {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: 'Failed to generate' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
