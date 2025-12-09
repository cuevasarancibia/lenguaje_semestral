// services/geminiService.ts
import { GeneratedContent, MagicGenre } from "../types";

const fallback: GeneratedContent = {
  story: "Había una vez un robot llamado Click que quería plantar una flor en Marte. Aunque el suelo era rojo y seco, Click usó su rayo de agua especial. Días después, brotó una pequeña hoja verde. Click aprendió que con esfuerzo, la vida crece en cualquier parte.",
  questionType: "Inferencia",
  question: "¿Qué característica de personalidad demuestra Click al plantar la flor?",
  answer: "Perseverancia y esperanza."
};

export const generateMagicStory = async (genre: MagicGenre): Promise<GeneratedContent> => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ genre }),
    });

    if (!response.ok) {
      console.warn("API error, using fallback");
      return fallback;
    }

    const data = await response.json();
    return data as GeneratedContent;

  } catch (error) {
    console.error("Error generating story:", error);
    return fallback;
  }
};
