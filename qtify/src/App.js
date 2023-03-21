import { fetchTopSongs, fetchSongs } from "./api/api";
import { fetchNewSongs, fetchFilters } from "./api/api";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { StyledEngineProvider } from "@mui/material/styles";
// import FAQAccordion from "./components/FAQAccordion/FAQAccordion";



function App() {
  return (
    <div className="App">
       <>
        <StyledEngineProvider injectFirst>
          <Navbar />
          <Hero />
          <Section title="Top Albums" datafetch={fetchTopSongs} type="album" />
          <Section title="New Albums" datafetch={fetchNewSongs} type="album" />
          <Section
            title="Songs"
            datafetch={fetchSongs}
            filterfetch={fetchFilters}
            type="song"
          />
          {/* <FAQAccordion /> */}
        </StyledEngineProvider>
      </>
    </div>
  );
}

export default App;
