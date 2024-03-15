import Footer from "../components/sections/footer";
import Header from "../components/sections/header";
import Whoami from "../components/sections/whoami_section";
import Projects from "../components/sections/projects_section";
import Skills from "../components/sections/skills_section";


export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-dir-col">
        <Whoami />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
