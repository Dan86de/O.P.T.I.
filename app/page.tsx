import { RiSendPlaneLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <section className="grow"></section>
      <section className="grow-0 w-full p-4 flex items-center gap-4 border-t-[1px] border-zinc-700">
        <input type="text" name="message" id="message" className="w-full " placeholder="Write message" />
        <RiSendPlaneLine size={20} />
      </section>
    </>
  );
}
