import { NextResponse } from "next/server";

type GeminiPart = {
  text?: string;
};

type GeminiCandidate = {
  content?: {
    parts?: GeminiPart[];
  };
};

type GeminiResponse = {
  candidates?: GeminiCandidate[];
};

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GEMINI_API_KEY belum diset" }, { status: 500 });
  }

  let prompt = "";
  try {
    const body = (await request.json()) as { prompt?: string };
    prompt = (body.prompt ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Body JSON tidak valid" }, { status: 400 });
  }

  if (!prompt) {
    return NextResponse.json({ error: "Pertanyaan wajib diisi" }, { status: 400 });
  }

  try {
    const geminiResponse = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Jawab pertanyaan berikut dalam Bahasa Indonesia dengan singkat, jelas, dan to the point. Jika ada typo, pahami konteksnya dan tetap jawab.

Pertanyaan: ${prompt}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 1,
          maxOutputTokens: 1024,
          topP: 0.95,
          thinkingConfig: {
            thinkingBudget: 0,
          },
        },
        safetySettings: [
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "OFF" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "OFF" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "OFF" },
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "OFF" },
        ],
      }),
    });

    if (!geminiResponse.ok) {
      const detail = await geminiResponse.text();
      return NextResponse.json({ error: "Gagal memanggil Gemini", detail }, { status: 502 });
    }

    const data = (await geminiResponse.json()) as GeminiResponse;
    const answer = data.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("\n").trim();

    if (!answer) {
      return NextResponse.json({ error: "Gemini tidak mengembalikan jawaban" }, { status: 502 });
    }

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json({ error: "Terjadi error saat memanggil Gemini" }, { status: 500 });
  }
}
