import SideBar from './sidebar';
import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });

const ProjectsLandingPage = () => {
  return (
    <>
    <SideBar />
      <h1 className="text-4xl text-center text-bold bg-primary m-50 py-10">Projects Landing Page</h1>
      <h2 className="bg-secondary m-50 py-10 text-center">
      Project portion coming soon!
      </h2>
    </>
  );
}

export default ProjectsLandingPage;