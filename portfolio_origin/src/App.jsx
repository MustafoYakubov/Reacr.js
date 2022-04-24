import Entering from "./components/entering/Entering";
import Navbar from "./layout/navbar/Navbar";

function App() {
  const scrollToPass = () => {
    window.scrollBy(0, 400);
  };
  return (
    <>
      <Navbar />
      <Entering />
    </>
  );
}

export default App;
