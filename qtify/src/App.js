import { fetchTopSongs } from "./api/api";
// import { fetchNewSongs } from "./api/api";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";



function App() {
  return (
    <div className="App">
       <>
        <Navbar />
        <Hero />
        <Section title="Top Albums" datafetch={fetchTopSongs} />
        {/* <Section title="New Albums" datafetch={fetchNewSongs} /> */}
      </>
    </div>
  );
}

export default App;
