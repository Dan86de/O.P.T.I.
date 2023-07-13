import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal } from "lucide-react";
import { AssistantChatCard } from "@/components/assistant-chat-card";
import { UserChatCard } from "@/components/user-chat-card";

interface IMessage {
  sender: string;
  text: string;
}

interface ChatWindowProps {
  messages: IMessage[];
  scrollAreaRef: React.RefObject<HTMLDivElement>;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, scrollAreaRef }) => {
  return (
    <ScrollArea className="w-full h-full">
      <section className="xl:w-3/4 mx-auto">
        {messages.map((message, index) =>
          message.sender === "assistant" ? (
            <AssistantChatCard key={index} text={message.text} />
          ) : (
            <UserChatCard key={index} text={message.text} />
          )
        )}
      </section>
      <div ref={scrollAreaRef} />
    </ScrollArea>
  );
};
