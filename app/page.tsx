"use client";

import { Button } from "@/components/ui/button";
import { ChatWindow } from "@/components/chat-window";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import llm from "@/lib/openAI";
import { useCallback, useRef, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

export default function Home() {
  const [msg, setMsg] = useState<string>();

  const handleAskAI = useCallback(async () => {
    if (!msg) return;
    const res = await llm.call(msg);
    return res;
  }, [msg]);

  const scrollAreaRef = useRef(null);

  return (
    <>
      <ChatWindow
        messages={[
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
          { text: "Hello there", sender: "assistant" },
          { text: "How are you OPTI?", sender: "user" },
        ]}
        scrollAreaRef={scrollAreaRef}
      />
      <section className="w-full p-4 flex items-center gap-4 border-t-[1px] border-border">
        <Textarea
          placeholder="Type your message here."
          className="resize-none max-h-44"
          value={msg}
          onChange={(e: any) => {
            setMsg(e.target.value);
          }}
        />
        <Button variant="outline" size="icon" onClick={handleAskAI}>
          <RiSendPlaneLine />
        </Button>
      </section>
    </>
  );
}
