const express = require("express");
const app = express();
const port = 3000;

// Import the OpenAI function
const { getOpenAICompletionWithEmotion } = require("./openAi");

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

// Example usage:
const systemPrompt = "give me the main emotions of this text";
const userPrompt =
	"today was a very bad day yet it was kinda tiring but it's all bad";

// Call the OpenAI function
getOpenAICompletionWithEmotion(systemPrompt, userPrompt)
	.then((result) => {
		console.log("Emotion Analysis Result:", result);
	})
	.catch((error) => {
		console.error("Error in Emotion Analysis:", error);
	});
