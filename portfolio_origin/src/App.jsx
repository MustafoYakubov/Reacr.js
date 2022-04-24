import Navbar from "./layout/navbar/Navbar";

function App() {
  const scrollToPass = () => {
    window.scrollBy(0, 400);
  };
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
