import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function generateContent(req: any, res: any) {
  try {
    // const { API_KEY } = process.env; // Ensure you have your API key set up

    const genAI = new GoogleGenerativeAI(
      "AIzaSyD2bikmwfiKKu5RuA9RInwlNAHepgtv4kI"
    );

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.status(200).json({ generatedText: text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
