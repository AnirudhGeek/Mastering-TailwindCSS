import Image from "next/image";



import { Container } from "@/component/Container";
import Navbar from "@/component/Navbar";





export default function Home() {
  return (
    <div className="layout">
      <Container><Navbar/></Container>
    </div>
  );
}
