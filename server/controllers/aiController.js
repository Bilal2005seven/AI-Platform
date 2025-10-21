import { clerkClient } from "@clerk/clerk-sdk-node";
import { sql } from "../database/db.js";
import OpenAI from "openai";

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const generateArticle = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, length } = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;
        if (plan !== 'premium' && free_usage >= 10) {
            return res.status(403).json({ success: false, message: "Free usage limit exceeded. Please upgrade to premium plan." })
        }
        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.7,
            max_tokens: length || 500,
        });
        const content = response.choices[0].message.content;
        await sql `INSERT INTO articles (user_id, prompt, content, type) VALUES (${userId}, ${prompt}, ${content}, 'article')`;
        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            });
        }
        return res.status(200).json({ success: true, article: content });
    } catch (error) {
        console.error("Error generating article:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}