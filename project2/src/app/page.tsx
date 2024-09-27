import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3 
          sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24
          xl:pt-32 lg:pb-52"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" alt="" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white ">Custom</span>{" "}
                Photo Case
              </h1>
              <p className=" mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories wth your own,
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2 ">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600 " />
                    Hign Quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600 " />5 years
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600 " />
                    Modern iphone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-0">
                  <img
                    src="/users/user-1.png"
                    alt="user Image"
                    className="inline-block size-10 rounded-full ring-4 ring-slate-200"
                  />
                  <img
                    src="/users/user-2.png"
                    alt="user Image"
                    className="inline-block size-10 rounded-full ring-4 ring-slate-200"
                  />
                  <img
                    src="/users/user-3.png"
                    alt="user Image"
                    className="inline-block size-10 rounded-full ring-4 ring-slate-200"
                  />
                  <img
                    src="/users/user-4.jpg"
                    alt="user Image"
                    className="inline-block size-10 rounded-full ring-4 ring-slate-200"
                  />
                  <img
                    src="/users/user-5.jpg"
                    alt="user Image"
                    className="inline-block object-cover size-10 rounded-full ring-4 ring-slate-200"
                  />
                </div>
                <div className="flex flex-col justify-between sm:items-center">
                  <div className="flex justify-center gap-0.5">
                    {[1, 2, 3, 4].map(() => (
                      <Star className="size-4 text-green-600 fill-green-600" />
                    ))}
                  </div>

                  <p className="mt-1">
                    <span className="font-semibold">1.250</span> Happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-12 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt=""
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt=""
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value propposition section */}

      <section className="bg-slate-100 py-14">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 ">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our <span className="relative px-2 ">customer</span> say
            </h2>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
