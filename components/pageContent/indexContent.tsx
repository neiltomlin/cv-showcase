import Link from "next/link";
import { PageTitle } from "./styles";

export const IndexContent = () => {
  return (
    <div id="main" data-testid="main">
      <PageTitle>Senior Front End Developer</PageTitle>
      <div>
        <p>Thank you for taking the time to view my CV showcase.</p>
        <p>
          This is a basic CSR NextJS app using their pages router. I have
          created this with the intention of showcasing my CV in web format
          using FE tech I am highly experienced in.
        </p>
        <p>
          My future plans to enhance this are to create an SSR app routed NextJS
          FE with Tailwind instead of Styled Components.
        </p>
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
      </div>
    </div>
  );
};
