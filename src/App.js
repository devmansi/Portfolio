import React from "react";
import ScrollToTop from "react-scroll-to-top";

// components
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <Header />
      <MainContent/>
      <ScrollToTop smooth top={200} color="#111" />
    </>
  );
};

export default App;
