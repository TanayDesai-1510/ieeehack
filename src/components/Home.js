import React from "react";
import { Box, Text } from "@chakra-ui/react";
// import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import GetStarted from "./GetStarted";
import Page from "./Page";

function Home() {
  return (
    <div>
      <Page/>
      <About/>
      <Services/>
      <GetStarted/>
      {/* <Contact/> */}
    </div>
  );
}

export default Home;
