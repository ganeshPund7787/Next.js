"use client";
import Link from "next/link";
import Image from "next/image"; // Importing the Image component
import courseData from "../data/music_cources.json";
import { BackgroundGradient } from "./ui/background-gradient";
import MoreBtn from "./MoreBtn";

interface Course {
  id?: number;
  title?: string;
  slug?: string;
  description?: string;
  price?: number;
  instructor?: string;
  isFeatured?: boolean;
  image?: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 min-h-screen bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="my-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-teal-600 mt-4 mb-2 dark:text-cyan-400">
                    {course.title}
                  </p>
                  <Image
                    src={course.image || "/fallback-image.jpg"}
                    alt={course.title || "Course Image"}
                    width={300}
                    height={200}
                    className="my-3 hover:scale-110 duration-1000"
                  />
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link className="mt-2" href={`/courses/${course.slug}`}>
                    <MoreBtn text={" Learn More"} />
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            View All courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
