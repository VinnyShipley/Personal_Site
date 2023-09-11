import SideBar from '../components/sidebar';
import ProjectCard from '@/components/projectcard';
import HeaderImage from '@/components/headerimage';



const ProjectsLandingPage = () => {
  return (
    <>
    <SideBar />
      <h1 className="text-4xl text-center text-bold bg-basic m-50 py-10 mt-0">Project Portfolio</h1>
      <div className='grid'>
      <ProjectCard />
      </div>
    </>
  );
}



export default ProjectsLandingPage;