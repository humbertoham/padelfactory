import NavbarM from "@/components/NavbarM";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';

import "../globals.css";
import Footer from "@/components/Footer";
import Us from "@/components/Us";
import Map from "@/components/Map";
import ButtonR from "@/components/buttonr";
export default function About() {
  return (
  <>
  <NavbarM/>
    <Us/>
    <Map/>
    <Footer/>
    <ButtonR/>
  </>
  );
}
