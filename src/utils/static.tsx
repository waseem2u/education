import {
  HowMojiDifferentTypes,
  TutorCustomCardTypes,
  SuccessCardsTypes,
  CareerDoctorTypes,
} from "@/types";
import {
  InnovativeIcon,
  LearningPath,
  ReportIcon,
  PlayButton,
  StartIcon,
} from "@/svg";
import {
  CareerPlay,
  CareerStroke,
  TotalPoint,
  TotalDuration,
  CareerBulb,
} from "@/svg";

export const HOW_MOJIGURUKAL_DIFFERENT: HowMojiDifferentTypes[] = [
  {
    id: 1,
    icon: <InnovativeIcon />,
    title: "Innovative Revision Tools",
    paragraph:
      " Helps you revise before exam in a modern way. CBSE or ICSE.  Maths,Science",
  },
  {
    id: 2,
    icon: <LearningPath />,
    title: "Personalised learning path  ",
    paragraph:
      "Learnings & lessons tailored to fit the career aspirations of the student enabling them",
  },
  {
    id: 3,
    icon: <ReportIcon />,
    title: "Actionable Insights and Report",
    paragraph:
      " Detailed reports and insights for students and parents with actions need to help",
  },
];

export const TUTOR_EXPERT: TutorCustomCardTypes[] = [
  {
    id: 1,
    image: "/Tutor/teacher1.png",
    name: "Polok Sharma",
    feild: "Teacher",
    review: "4.8 (1.380 Review)",
    totalStudent: "3k Total Student",
  },
  {
    id: 2,
    image: "/Tutor/teacher2.png",
    name: "Polok Sharma",
    feild: "Teacher",
    review: "4.8 (1.380 Review)",
    totalStudent: "3k Total Student",
  },
  {
    id: 3,
    image: "/Tutor/teacher3.png",
    name: "Polok Sharma",
    feild: "Teacher",
    review: "4.8 (1.380 Review)",
    totalStudent: "3k Total Student",
  },
];

export const SUCCESS_STUDENT: SuccessCardsTypes[] = [
  {
    id: 1,
    image: "/success/success1.png",
    name: "Leslie Alexander",
    role: "Parent",
    icon: <StartIcon />,
  },
  {
    id: 2,
    image: "/success/success2.png",
    name: "Leslie Alexander",
    role: "Parent",
    icon: <PlayButton />,
  },
  {
    id: 3,
    image: "/success/success3.png",
    name: "Albert Flores",
    role: "Parent",
    icon: <PlayButton />,
  },
];

export const CAREER_D0CTOR: CareerDoctorTypes[] = [
  {
    id: 1,

    title: "Introduction of Doctor Career",
    percent: 10,
    minute: 10,
    videoPath: "https://docs.material-tailwind.com/demo.mp4",
    description: "10 percent introduction doctor career",
  },
  {
    id: 2,

    title: "Introduction of Doctor Career",
    percent: 20,
    minute: 10,
    videoPath: "https://www.youtube.com/watch?v=4tNQ2H_p9jA.mp4",
    description: "20 percent introduction doctor career",
  },
  {
    id: 3,

    title: "Introduction of Doctor Career",
    percent: 30,
    minute: 10,
    videoPath: "https://www.youtube.com/watch?v=CToL2qkCd8g.mp4",
    description: "30 percent introduction doctor career",
  },
  {
    id: 4,

    title: "Introduction of Doctor Career",
    percent: 40,
    minute: 10,
    videoPath: "https://www.youtube.com/watch?v=4tNQ2H_p9jA.mp4",
    description: "40 percent introduction doctor career",
  },
  {
    id: 5,

    title: "Introduction of Doctor Career",
    percent: 50,
    minute: 10,
    videoPath: "https://www.youtube.com/watch?v=CToL2qkCd8g.mp4",
    description: "50 percent introduction doctor career",
  },

  {
    id: 6,
    title: "Quiz",
    minute: 10,
    questions: [
      {
        id: 1,
        question: "Who is the innovate bulb?",
        option: ["Option 1", "Option 2", "Option 3", "None"],
      },
      {
        id: 2,
        question: "Who is the innovate car?",
        option: ["Week 1", "Week 2", "Week 3", "None"],
      },
      {
        id: 3,
        question: "Who is the innovate train?",
        option: ["Option 1", "Option 2", "Option 3", "None"],
      },
      {
        id: 3,
        question: "Who is the innovate bus?",
        option: ["Option 1", "Option 2", "Option 3", "None"],
      },
    ],
  },
  {
    id: 7,
    title: "Quiz",
    minute: 10,
    questions: [
      {
        id: 1,
        question: "Who is the innovate bulb?",
        awnser: "answer1",
      },
      {
        id: 2,
        question: "Who is the innovate car?",
        awnser: "answer2",
      },
      {
        id: 3,
        question: "Who is the innovate train?",
        awnser: "answer3",
      },
    ],
  },
  {
    id: 8,

    title: "Introduction of Doctor Career",
    percent: 60,
    minute: 60,
    videoPath: "https://docs.material-tailwind.com/demo.mp4",
    description: "60 percent introduction doctor career",
  },
  {
    id: 9,

    title: "Introduction of Doctor Career",
    percent: 70,
    minute: 70,
    videoPath: "https://docs.material-tailwind.com/demo.mp4",
    description: "70 percent introduction doctor career",
  },
  {
    id: 10,
    title: "Introduction of Doctor Career",
    percent: 80,
    minute: 80,
    videoPath: "https://docs.material-tailwind.com/demo.mp4",
    description: "80 percent introduction doctor career",
  },
];

export const CAREER_EXPLORE = [
  {
    id: 1,
    icon: <CareerStroke />,
    detail: " Career Level",
  },
  {
    id: 2,
    icon: <TotalPoint />,
    detail: "Total Point : 80",
  },
  {
    id: 3,
    icon: <TotalDuration />,
    detail: "Duration : 8 segment Total 80 Minutes",
  },
];
