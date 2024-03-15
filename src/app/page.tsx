import Footer from "../components/footer";
import Header from "../components/1_header/header";
import Whoami from "../components/whoami_section";
import Projects from "../components/projects_section";
import Skills from "../components/skills_section";


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
