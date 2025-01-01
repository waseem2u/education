import Navbar from "../component/Navbar";
import Header from "@/component/Header";
import CopyHeader from "@/component/CopyHeader";
import EnageSection from "@/component/EnageSection";
import BenifitsGurukul from "@/component/BenifitsGurukul";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CopyHeader />
      <EnageSection />
      <BenifitsGurukul />
    </div>
  );
}
