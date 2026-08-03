import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Business } from "./components/Business";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { theme, mode, setTheme, toggleMode } = useTheme();

  return (
    <>
      <div className="page-bg" aria-hidden />
      <Header theme={theme} mode={mode} onThemeChange={setTheme} onModeToggle={toggleMode} />
      <main>
        <Hero theme={theme} />
        <Experience />
        <Business />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
