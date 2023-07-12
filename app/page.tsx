import { Input } from "@/components/Input";
import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";
import { RiSendPlaneLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <section className="grow">Messages</section>
      <section className="grow-0 w-full p-4 flex items-center gap-4 border-t-[1px] border-border">
        <Textarea placeholder="Type your message here." className="resize-none" />
        <Button variant="outline" size="icon">
          <RiSendPlaneLine />
        </Button>
      </section>
    </>
  );
}
