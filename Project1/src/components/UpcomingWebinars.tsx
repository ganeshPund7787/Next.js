"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { featuredWebinars } from "@/data/featuredWebinarsData";

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
