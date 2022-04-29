import AboutMe from "./components/aboutMe/AboutMe";
import Entering from "./components/entering/Entering";
import Skills from "./components/skills/Skills";
import Container from "./layout/Container/Container";
import Navbar from "./layout/navbar/Navbar";

function App() {
  const scrollToPass = () => {
    window.scrollBy(0, 400);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Entering />
        <AboutMe />
        <Skills />
      </Container>
    </>
  );
}

export default App;
