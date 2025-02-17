import { ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
interface BaseInfo {
  label: string;
  value: string;
}
interface Skill {
  key: string;
  value: number;
}
interface SkillCategory {
  category: string;
  value: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: "front-end",
    value: [
      { key: "nextjs", value: 80 },
      { key: "reactjs", value: 80 },
      { key: "typescript", value: 80 },
      { key: "Redux", value: 80 },
      { key: "React Query", value: 80 },
      { key: "javascript", value: 90 },
      { key: "html,css", value: 90 },
      { key: "angularjs", value: 40 },
    ],
  },
  {
    category: "ui/ux",
    value: [
      { key: "Material-U", value: 100 },
      { key: "tailwind", value: 100 },
      { key: "css-in-js", value: 90 },
      { key: "Responsive Design", value: 90 },
      { key: "Adaptive Design", value: 90 },
    ],
  },
  {
    category: "Testing Frameworks",
    value: [{ key: "jest", value: 70 }],
  },
  {
    category: "Tools & Version Control",
    value: [
      { key: "github", value: 90 },
      { key: "gitlab", value: 90 },
      { key: "Azure DevOps", value: 80 },
    ],
  },
  {
    category: "other",
    value: [
      { key: "agile", value: 90 },
      { key: "scrum methodologies", value: 80 },
    ],
  },
];

const baseInfo: BaseInfo[] = [
  { label: "Birthday", value: "21 feb 1997" },
  { label: "Age", value: "28" },
  { label: "City", value: "Tehran, Iran" },
  { label: "Email", value: "fsiadatzade@gmail.com" },
  { label: "Mobile", value: "+98 936 001 0251" },
  { label: "Freelance", value: "Available" },
];

function About() {
  return (
    <section className="mt-5 p-5">
      <div>
        <h3 className="text-4xl font-bold">About Me</h3>
        <span className="block mt-2 w-20 border-b-4 border-primary"></span>
        <span className="block mt-2 w-9 border-b-4 border-primary"></span>
      </div>
      <div className="mt-9">
        <h2 className="font-bold text-4xl leading-12 md:leading-[4rem] mb-4">
          I'm Farid Siadatzade and
          <span className="text-primary"> Front-end Developer</span>
        </h2>
        <div>
          <h3 className="mb-4 text-foreground text-xl leading-9 text-justify">
            Passionate and creative front-end developer with over 5 years of
            experience developing cutting-edge and robust code for high-volume
            businesses. Proven ability to leverage earned expertise and
            project-wide knowledge to build future- proof, user-interactive
            services that effortlessly scale. Skilled in problem-solving and
            working flexibly with various types of development methodologies and
            team members.
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          <div className="grid lg:grid-cols-2 gap-4 h-fit">
            <div className="md:mb-4">
              <h2 className="text-2xl font-bold">Me</h2>
              <span className="block mt-1 w-20 border-b-4 border-primary"></span>
            </div>
            <br />
            {baseInfo.length > 0 &&
              baseInfo.map((item, index) => (
                <div className="flex" key={index}>
                  <ChevronRight className="text-primary" />
                  <label className="font-bold ">{item.label}: </label>
                  <p className="ml-2">{item.value}</p>
                </div>
              ))}
            <div className="my-4 md:mt-12 md:mb-1">
              <Button className="rounded-full">ِDownload CV</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:mb-4">
              <h2 className="text-2xl font-bold">Skills</h2>
              <span className="block mt-1 w-20 border-b-4 border-primary"></span>
            </div>
            <br />
            {skills.map((data, index) => (
              <div
                className="relative border-l-2 border-border pl-4 ml-4 mb-3"
                key={index}
              >
                <div className="w-4 h-4 bg-primary rounded-full absolute left-[-10px]"></div>
                <h4 className="font-bold mb-2">{data.category}</h4>
                <div>
                  {data.value.length > 0 &&
                    data.value.map((item, index) => (
                      <Progress
                        className="mb-2"
                        value={item.value}
                        title={item.key}
                        key={index}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
