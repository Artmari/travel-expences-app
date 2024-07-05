// src/openaiService.js
import axios from "axios";

const API_KEY = "";

const openaiService = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    "api-key": `${API_KEY}`,
  },
});

export const generateText = async (prompt: any) => {
  try {
    const response = await openaiService.post("", {
      //model: "sclable-gpt-35-turbo",
      prompt: prompt,
      max_tokens: 30, // you can adjust this as needed
      temperature: 0.2,
      presence_penalty: 0.5,
      frequency_penalty: 0.3,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
};