import { NextResponse } from "next/server";

export async function POST() {
  // [START aiplatform_gemini_single_turn_video]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  const projectId = "arcookingapp";
  const location = "us-central1";
  const model = "gemini-pro-vision";

  const { VertexAI } = require("@google-cloud/vertexai");

  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({ project: projectId, location: location });

  const generativeVisionModel = vertexAI.preview.getGenerativeModel({
    model: model,
  });

  // Pass multimodal prompt
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

  // Create the response
  const response = await generativeVisionModel.generateContent(request);
  // Wait for the response to complete
  const aggregatedResponse = await response.response;
  // Select the text from the response
  const fullTextResponse =
    aggregatedResponse.candidates[0].content.parts[0].text;

  console.log(fullTextResponse);

  // [END aiplatform_gemini_single_turn_video]
  return NextResponse.json(fullTextResponse);
}

// POST(...process.argv.slice(2)).catch((err) => {
//   console.error(err.message);
//   process.exitCode = 1;
// });
