import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default llm;
