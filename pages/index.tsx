import { PageContainer } from "@/components/layout";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      router.push(href);
    }
  };

  return (
    <PageContainer>
      <div>
        <h1>Neil Tomlin</h1>
        <p>Front End Developer</p>
      </div>
      <div>
        <p>Thank you for taking the time to view my CV showcase</p>
        <ul>
          <li>
            <a href="/education" onClick={handleClick}>
              Education
            </a>
          </li>
          <li>
            <a href="/employment" onClick={handleClick}>
              Employment
            </a>
          </li>
          <li>
            <a href="/skills" onClick={handleClick}>
              Skills
            </a>
          </li>
        </ul>
      </div>
    </PageContainer>
  );
};
export default Index;
