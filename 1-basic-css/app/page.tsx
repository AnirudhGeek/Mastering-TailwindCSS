import Image from "next/image";

import { Container } from "@/component/Container";
import Navbar from "@/component/Navbar";
import Hero from "@/component/hero";

export default function Home() {
  return (
    <div className="layout">
      <Container>
        <Navbar />
        <Hero/>
      </Container>
    </div>
  );
}
