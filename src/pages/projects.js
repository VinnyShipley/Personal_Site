import SideBar from '../components/sidebar';
import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });



const ProjectsLandingPage = () => {
  return (
    <>
    <SideBar />
      <h1 className="text-4xl text-center text-bold bg-basic m-50 py-10">Projects Landing Page</h1>
      <h2 className="bg-accent m-50 py-10 text-center">
      Project portion coming soon!
      </h2>
      <ProjectCard title={"Budget App"}/>
    </>
  );
}

const ProjectCard = (title, description) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <p><a href="{ link }">Link can be found here</a></p>
  </div>
);

export default ProjectsLandingPage;