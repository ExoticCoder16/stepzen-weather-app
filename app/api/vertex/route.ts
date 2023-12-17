import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const projectId = "arcookingapp";
    const location = "us-central1";
    const model = "gemini-pro-vision";

    const { VertexAI } = require("@google-cloud/vertexai");

    const vertexAI = new VertexAI({ project: projectId, location: location });

    const generativeVisionModel = vertexAI.preview.getGenerativeModel({
      model: model,
    });

    const request = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "What is in the video?",
            },
            {
              fileData: {
                fileUri: "https://youtu.be/_cmx_KUDyBM",
                mimeType: "video/mp4",
              },
            },
          ],
        },
      ],
    };

    const response = await generativeVisionModel.generateContent(request);
    const aggregatedResponse = await response.response;
    const fullTextResponse =
      aggregatedResponse.candidates[0].content.parts[0].text;

    console.log(fullTextResponse);

    return NextResponse.json({ fullTextResponse });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
