import Intro from "@/components/intro";
import { SectionDivider } from "@/components/sectiondivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
    </main>
  )
}
