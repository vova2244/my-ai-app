'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        <div className="overflow-y-auto max-h-80">
          {messages.map(m => (
            <div
              key={m.id}
              className={`p-3 mb-2 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}
            >
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}