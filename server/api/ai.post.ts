import OpenAI from 'openai';


export default defineEventHandler(async (event) => {
  
  const body = await readBody(event)

  const { OPENAI_API_KEY } = useRuntimeConfig()
  
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, // Zastąp 'YOUR_OPENAI_API_KEY' swoim kluczem API
  });


  const completion = await openai.chat.completions.create({
    messages: body.messages || [],
    model: "gpt-3.5-turbo",
    temperature: body.temperature || 1
  });

  return completion

})
