import { Button } from "@/components/ui/button";
import MyPhoto from "@/components/MyPhoto";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen items-center lg:grid grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-3 lg:pl-4">
        <h2 className="font-bold text-4xl leading-12 md:leading-[4rem] mb-4">
          Hello, my name is{" "}
          <span className="font-serif italic text-primary text-3xl">
            Farid Siadatzade
          </span>{" "}
          I'm a<span> Front-end Developer</span>
        </h2>
        <h3 className="mb-4 line-clamp-3 text-muted-foreground text-xl leading-9 text-justify">
          Passionate and creative front-end developer with over 5 years of
          experience developing cutting-edge and robust code for high-volume
          businesses. Proven ability to leverage earned expertise and
          project-wide knowledge to build future- proof, user-interactive
          services that effortlessly scale. Skilled in problem-solving and
          working flexibly with various types of development methodologies and
          team members.
        </h3>
        <Link href="/about">
          <Button className="mt-8 md:mt-12 rounded-full">More About Me</Button>
        </Link>
      </div>
      <div className="md:flex md:justify-center mt-12 md:mt-[25%] lg:col-span-2 lg:mt-2 mx-auto">
        <MyPhoto />
      </div>
    </div>
  );
}
