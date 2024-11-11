import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log("What am i doning here ?");
  return (
    <>
      <h1 className="text-3x">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
