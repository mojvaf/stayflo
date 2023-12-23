"use client";

//components
import Navbar from "./components/navbar/Navbar";
//page
import Homepage from "./(dashboard)/homepage.tsx/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage />
    </main>
  );
}
