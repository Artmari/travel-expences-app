// src/openaiService.js
import axios from "axios";

const API_KEY = "";

const openaiService = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const generateText = async (prompt: any) => {
  try {
    const response = await openaiService.post("/completions", {
      model: "text-davinci-003", // or the model you are using
      prompt: prompt,
      max_tokens: 150, // you can adjust this as needed
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
};
