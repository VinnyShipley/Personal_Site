import SideBar from '../components/sidebar';
import ProjectCard from '@/components/projectcard';
import HeaderImage from '@/components/headerimage';



const ProjectsLandingPage = () => {
  return (
    <>
    <HeaderImage />
    <SideBar />
      <h1 className="text-4xl text-center text-bold bg-basic m-50 py-10">Projects Landing Page</h1>
      <ProjectCard />

    </>
  );
}



export default ProjectsLandingPage;