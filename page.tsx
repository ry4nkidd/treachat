"use client";

import { useState } from "react";
import type { Message } from "@/types";
import ChatLayout from "@/components/chat-layout";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    if (text.trim() === "") return;
    const newMessage: Message = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const removeMessage = (id: string) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  return (
    <ChatLayout
      messages={messages}
      onSendMessage={sendMessage}
      onRemoveMessage={removeMessage}
    />
  );
}
