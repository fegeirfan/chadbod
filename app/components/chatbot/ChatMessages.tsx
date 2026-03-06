'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatMessages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Halo! Saya adalah asisten FAQ. Apa yang bisa saya bantu hari ini?',
      from: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <div className="flex flex-col space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end ${
              message.from === 'bot' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-md shadow-sm ${
                message.from === 'bot'
                  ? 'bg-white text-gray-800 rounded-bl-none'
                  : 'bg-blue-600 text-white rounded-br-none'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              <p className="text-xs text-right mt-1 opacity-75">{message.timestamp}</p>
            </div>
          </div>
        ))}
        {isTyping && (
            <div className="flex justify-start">
                <div className="px-4 py-2 rounded-lg max-w-md shadow-sm bg-white text-gray-800 rounded-bl-none">
                    <div className="flex items-center space-x-1">
                        <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0s]"></span>
                        <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                        <span className="block w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}