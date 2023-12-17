import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: any) {
  try {
    // const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(
      "AIzaSyD2bikmwfiKKu5RuA9RInwlNAHepgtv4kI"
    );

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // res.status(200).json({ generatedText: text });
    return NextResponse.json({ generatedText: text });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
    // console.error("Error:", error);
    // res.status(500).json({ error: "Internal Server Error" });
  }
}
