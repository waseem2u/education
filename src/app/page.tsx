import Navbar from "../component/Navbar";
import Header from "@/component/Header";
import CopyHeader from "@/component/CopyHeader";
import EnageSection from "@/component/EnageSection";
import BenifitsGurukul from "@/component/BenifitsGurukul";
import Tutor from "@/component/Tutor";
import StudentSuccess from "@/component/StudentSuccess";
import ExperienceCard from "@/component/ExperienceCard";
import Footer from "@/component/Footer";
import CareerPage from "./career/page";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <CopyHeader />
      <EnageSection />
      <BenifitsGurukul />
      <Tutor />
      <StudentSuccess />
      <ExperienceCard />
      <Footer /> */}
      <CareerPage />
    </div>
  );
}
