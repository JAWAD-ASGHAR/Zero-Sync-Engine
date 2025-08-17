"use client";
import { z } from "@/zero";
import { useState, useEffect } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ id: number; body: string }[]>([]);

  useEffect(() => {
    const view = z.query.messages.materialize();
    view.addListener((data) => {
      console.log('new data', data);
      setMessages([...data]);
    });

    // Cleanup function to remove listener when component unmounts
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        className="cursor-pointer bg-blue-500 text-white p-2 rounded-md"
        onClick={() =>
          z.mutate.messages.insert({
            id: Math.floor((Math.random() * 10000000)%1000000),
            body: "Hello World!",
          })
        }
      >
        Insert
      </button>

      <ul>
        {messages.map((message) => (
          <li className="text-black p-2 rounded-md" key={message.id}>
            {message.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
