import {
  HowMojiDifferentTypes,
  TutorCustomCardTypes,
  SuccessCardsTypes,
} from "@/types";
import {
  InnovativeIcon,
  LearningPath,
  ReportIcon,
  PlayButton,
  StartIcon,
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
    image :"/success/success1.png",
    name: "Leslie Alexander",
    role: "Parent",
    icon: <StartIcon />,
  },
  {
    id: 2,
    image :"/success/success2.png",
    name: "Leslie Alexander",
    role: "Parent",
    icon: <PlayButton />,
  },
  {
    id: 3,
    image :"/success/success3.png",
    name: "Albert Flores",
    role: "Parent",
    icon: <PlayButton />,
  },
];
