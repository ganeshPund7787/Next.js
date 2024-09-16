import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginBtn } from "@/components/auth/login-Btn";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-600">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple mAuthetication Service</p>
        <div className="">
          <LoginBtn>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginBtn>
        </div>
      </div>
    </main>
  );
}
