import Image from "next/image";
import Link from "next/link";
import HeroHome from "@/assets/home/herohome.png";
import BgHeroHome from "@/assets/home/bgherohome.jpg";

export default function Hero() {
  return (
    <section
      className="w-full py-20 md:py-24 lg:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgHeroHome.src})` }}
    >
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock the Power of Seamless Collaboration
          </h1>
          <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Streamline your team's workflow with our all-in-one platform,
            designed to boost productivity and foster seamless collaboration.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image src={HeroHome} width={600} height={300} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
