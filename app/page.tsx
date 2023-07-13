"use client";

import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";
import llm from "@/lib/openAI";
import { useCallback, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

export default function Home() {
  const [msg, setMsg] = useState<string>();

  const handleAskAI = useCallback(async () => {
    if (!msg) return;
    const res = await llm.call(msg);
    return res;
  }, [msg]);

  return (
    <>
      <section className="grow">Messages</section>
      <section className="w-full p-4 flex items-center gap-4 border-t-[1px] border-border">
        <Textarea
          placeholder="Type your message here."
          className="resize-none max-h-44"
          value={msg}
          onChange={(e) => {
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
