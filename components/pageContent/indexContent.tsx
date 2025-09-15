import Image from "next/image";
import Link from "next/link";
import CraneImage from "./assets/crane-construction.svg";

export const IndexContent = () => {
  return (
    <>
      <div>
        <h1>Senior Front End Developer</h1>
      </div>
      <div>
        <p>Thank you for taking the time to view my CV showcase</p>
        <ul>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/employment">Employment</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
        </ul>

        <p>This is a simple CV showcase built with Next.js and TypeScript.</p>
        <p>I'm still working on it!</p>
        <Image
          src={CraneImage}
          alt="Image showing a website being built"
          width={200}
          height={200}
        />
      </div>
    </>
  );
};
