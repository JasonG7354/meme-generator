import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Footer from "./components/Footer";
import Darkmode from "./components/darkmode";

export default function App(){
  return (
    <div>
      <Header />
      <Darkmode />
      <Meme />
      <Footer />
    </div>
  )
}
