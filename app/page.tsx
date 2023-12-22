"use client";
//components
import Navbar from "./components/navbar/Navbar";
//page
import Homepage from "./homepage.tsx/page";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is opimport {

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage />
    </main>
  );
}
