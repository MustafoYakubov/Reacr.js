import Entering from "./components/entering/Entering";
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
      </Container>
    </>
  );
}

export default App;
