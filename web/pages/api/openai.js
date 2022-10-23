import OpenAI from "openai-api";

const handler = async (req, res) => {
  const config = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  const body = {
    model: "text-davinci-002",
    prompt: req.body.query,
  };

  const request = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: config,
    body: JSON.stringify(body),
  });
  const data = await request.json();

  res.status(200).json(data);
};

export default handler;
