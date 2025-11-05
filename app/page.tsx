import Image from 'next/image'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <AboutMe />

         <div className="relative">
           <div className="relative w-full max-w-sm mx-auto max-w-[300px] aspect-square overflow-hidden rounded-full shadow-sm">
            <Image
              src="/images/profile_pic.jpeg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

