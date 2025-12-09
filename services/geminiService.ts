import { GoogleGenAI } from "@google/genai";
import { GeneratedContent, MagicGenre } from "../types";

const apiKey = process.env.API_KEY; 
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
}

export const generateMagicStory = async (genre: MagicGenre): Promise<GeneratedContent> => {
  // Fallback content in case API fails or is missing
  const fallback: GeneratedContent = {
    story: "Había una vez un robot llamado Click que quería plantar una flor en Marte. Aunque el suelo era rojo y seco, Click usó su rayo de agua especial. Días después, brotó una pequeña hoja verde. Click aprendió que con esfuerzo, la vida crece en cualquier parte.",
    questionType: "Inferencia",
    question: "¿Qué característica de personalidad demuestra Click al plantar la flor?",
    answer: "Perseverancia y esperanza."
  };

  if (!ai) {
    console.warn("API Key missing, using fallback.");
    return fallback;
  }

  try {
    const questionTypes = ['Inferencia', 'Información Explícita', 'Opinión Personal', 'Vocabulario en Contexto'];
    const selectedType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    const model = 'gemini-2.5-flash';
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
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) return fallback;

    const parsed = JSON.parse(text) as GeneratedContent;
    return parsed;

  } catch (error) {
    console.error("Error generating story:", error);
    return fallback;
  }
};