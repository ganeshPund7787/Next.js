import MoreBtn from "@/components/MoreBtn";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
    <div className="sm:mt-28 md:mt-36 h-full w-full">
      <h1 className="text-6xl text-center">Contact Us</h1>
      <div className="my-8">
        <div className="flex flex-col gap-7 items-center justify-center">
          <input
            type="text"
            placeholder="Enter Your Subject"
            className="dark:bg-black border w-[60%] p-3 rounded-[0.5rem] sm:border-2 border-slate-600"
          />
          <textarea
            name=""
            placeholder="write your message"
            id=""
            className="bg-black p-3 border w-[60%] rounded-[0.5rem] resize-none sm:border-2 border-slate-600"
          ></textarea>
        </div>
        <div className="mt-5">
          <MoreBtn text="Submit" />
        </div>
      </div>
      <Meteors number={20} />
    </div>
  );
};

export default page;
