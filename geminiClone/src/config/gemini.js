import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAG_KH1DZnpLJOmwj2HdgLwUmiWKn-W86k" });

async function Gemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt}`,
  });
  console.log(response.text);
  return response.text;
}

export default Gemini