// Function to get OpenAI completion with emotion analysis
const { OpenAI } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function getOpenAICompletionWithEmotion(
	systemPrompt,
	userPrompt,
	temperature = 0
) {
	try {
		const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
		const completion = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			max_tokens: 1024,
			temperature,
			messages: [
				{ role: "system", content: systemPrompt },
				{ role: "user", content: userPrompt },
			],
		});

		let content = completion.choices[0]?.message?.content?.trim() ?? "";
		console.log("OpenAI Output: \n", content);

		// Replace with your logic to extract JSON from content
		content = extractJson(content);

		return content;
	} catch (e) {
		console.error("Error getting data:", e);
		throw e;
	}
}

// Export the function(s) you want to use in other files
module.exports = {
	getOpenAICompletionWithEmotion,
};
