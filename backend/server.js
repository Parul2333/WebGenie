import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.API_KEY) {
  console.error("ERROR: API_KEY is not set in .env file!");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const generatedText = result.response.text();
    
    res.json({ code: generatedText });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: error.message || error.toString() });
  }
});

app.listen(5000, () => console.log("Server Running on port 5000"));
