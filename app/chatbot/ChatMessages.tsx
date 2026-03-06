'use client';

import { useState } from 'react';

export default function ChatMessages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Halo 👋\nSaya chatbot bantuan untuk menjawab pertanyaan tentang website ini.',
      from: 'bot',
    },
  ]);

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.from === 'bot' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                message.from === 'bot'
                  ? 'bg-white text-gray-800'
                  : 'bg-blue-500 text-white'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}