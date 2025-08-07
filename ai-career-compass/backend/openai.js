
const { OpenAIApi, Configuration } = require("openai");
const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

module.exports = openai;
