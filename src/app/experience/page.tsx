"use client";

import dynamic from 'next/dynamic';
import { ExperienceItem, EducationItem } from "@/types/experience";
import tadbir from "@/assets/images/companies/tadbir.jpeg";
import parham from "@/assets/images/companies/parham.jpeg";
import nokarto from "@/assets/images/companies/nokarto.jpeg";
// import shirazUni from "@/assets/images/universities/shiraz.jpeg";
// import shahroodUni from "@/assets/images/universities/shahrood.jpeg";

const DynamicTimeline = dynamic(() => 
  import('@/components/Timeline').then(mod => mod.Timeline),
  {
    loading: () => <div className="animate-pulse h-96 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>,
    ssr: false,
  }
);

const workExperience: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    subtitle: "Tadbir Pardaz IT Co.",
    date: "2020 - Present",
    logo: tadbir,
    location: "Tehran, Iran",
    technologies: ["React", "TypeScript", "Redux", "Module Federation", "Material-UI"],
    description: [
      "Maintained and enhanced the AdminPlus platform used by over 40 brokers",
      "Improved system performance by optimizing React components and Redux store",
      "Developed new features and ensured cross-device responsiveness",
      "Implemented complex components using TypeScript and React",
      "Collaborated with UX/UI designers to deliver user-centric features"
    ],
  },
  {
    title: "Frontend Developer",
    subtitle: "Parham Smart Co.",
    date: "2019 - 2020",
    logo: parham,
    location: "Tehran, Iran",
    technologies: ["React", "JavaScript", "SCSS", "RESTful APIs"],
    description: [
      "Enhanced user experience design for multiple client projects",
      "Implemented pixel-perfect UI elements and responsive layouts",
      "Developed and maintained client-side applications",
      "Collaborated with backend team for API integration"
    ],
  },
  {
    title: "Web Developer",
    subtitle: "Nokarto",
    date: "2019 - 2019",
    logo: nokarto,
    location: "Tehran, Iran",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    description: [
      "Delivered smart evaluation forms for Applyman Company",
      "Collaborated on internal system automation projects",
      "Developed and maintained WordPress websites",
      "Provided technical support to clients"
    ],
  },
];

const education: EducationItem[] = [
  {
    title: "Master of E-Commerce",
    subtitle: "Shiraz University",
    date: "2021 - 2023",
    // logo: shirazUni,
    location: "Shiraz, Iran",
    gpa: "17.80/20",
    thesis: "Blockchain-based Framework for Secure E-Commerce Transactions",
    activities: [
      "Research Assistant in E-Commerce Lab",
      "Published paper in International Journal of E-Commerce"
    ],
    description: [
      "E-Commerce Systems and Technologies",
      "Digital Marketing and Business Analytics",
      "Blockchain in E-Commerce",
      "Information Security in Online Business",
      "Advanced Web Technologies"
    ],
  },
  {
    title: "Bachelor of Computer & IT Engineering",
    subtitle: "Shahrood University of Technology",
    date: "2015 - 2019",
    // logo: shahroodUni,
    location: "Shahrood, Iran",
    gpa: "16.85/20",
    thesis: "Implementation of an IoT-based Smart Home System",
    activities: [
      "Member of Computer Engineering Association",
      "Participated in ACM Programming Contest"
    ],
    description: [
      "Computer Networks and Security",
      "Software Engineering",
      "Database Management Systems",
      "Web Development",
      "Internet of Things (IoT)"
    ],
  },
];

export default function Experience() {
  return (
    <section className="mt-5 p-5">
      <div>
        <h3 className="text-4xl font-bold">Experience & Education</h3>
        <span className="block mt-2 w-20 border-b-4 border-primary"></span>
        <span className="block mt-2 w-9 border-b-4 border-primary"></span>
      </div>

      <div className="mt-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-6">Work Experience</h4>
            <DynamicTimeline items={workExperience} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-6">Education</h4>
            <DynamicTimeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
} 