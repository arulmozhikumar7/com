import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTopButton from "./components/ScrollToTopButton";
const App = () => {
  return (
    <div>
      <div>
        <Home />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
