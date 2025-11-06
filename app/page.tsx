import Image from "next/image";
import AboutMe from "./components/home/AboutMe";

export default function Home() {
  return (
    <div className="flex justify-between sm:flex-row gap-8 flex-col-reverse items-center mx-auto max-w-6xl px-6 py-16 text-dgray-900 pr-8">
      <AboutMe />
      <Image
        src="/images/profile_pic.jpeg"
        alt="Profile photo"
        width={250}
        height={150}
        className="object-cover rounded-full"
        priority
      />
    </div>
  );
}
