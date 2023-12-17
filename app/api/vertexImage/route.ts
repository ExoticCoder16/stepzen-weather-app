import { NextResponse } from "next/server";

export async function POST(
  projectId = "arcookingapp",
  location = "us-central1",
  model = "gemini-pro-vision",
  image = "https://static.vecteezy.com/system/resources/previews/029/389/597/large_2x/ai-generative-scones-with-oats-cranberry-and-pecan-nuts-on-wooden-background-top-view-photo.jpg",
  mimeType = "image/jpeg"
) {
  const { VertexAI } = require("@google-cloud/vertexai");

  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({ project: projectId, location: location });

  // Instantiate the model
  const generativeVisionModel = vertexAI.preview.getGenerativeModel({
    model: model,
  });

  // For images, the SDK supports both Google Cloud Storage URI and base64 strings
  const filePart = {
    fileData: {
      fileUri: image,
      mimeType: mimeType,
    },
  };

  const textPart = {
    text: "what is shown in this image?",
  };

  const request = {
    contents: [{ role: "user", parts: [textPart, filePart] }],
  };

  console.log("Prompt Text:");
  console.log(request.contents[0].parts[0]);

  console.log("Non-Streaming Response Text:");
  // Create the response stream
  const responseStream = await generativeVisionModel.generateContentStream(
    request
  );

  // Wait for the response stream to complete
  const aggregatedResponse = await responseStream.response;

  // Select the text from the response
  const fullTextResponse =
    aggregatedResponse.candidates[0].content.parts[0].text;

  console.log(fullTextResponse);

  // [END aiplatform_gemini_get_started]
}

// POST(...process.argv.slice(2)).catch((err) => {
//   console.error(err.message);
//   process.exitCode = 1;
// });
