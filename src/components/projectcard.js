const projectArray = [
  {title: 'Budget App', 
  description: 'A budget calculator to figure out a fair split of finances between multiple people with different incomes and any number of expenses', 
  link: 'https://github.com/VinnyShipley/Budget-App', 
  techs: 'Pyton, Django, Bootstrap 5',
  },
  {
    title: 'Personal Website',
    description: 'The website that you are looking at right now',
    link: 'https://github.com/VinnyShipley/Personal_Site',
    techs: 'Next.js, TailwindCSS, PostgreSQL',
  }];

const ProjectCard = () => (
  <div className="mt-16">
    {projectArray.map((item) => (
      <div className="max-w-5xl mx-auto bg-accent rounded-lg py-8 mt-20 text-2xl" key={item.title}>
        <p className="flex justify-center">{item.title}</p>
        <br/>
        <p className="flex justify-center px-4">{item.description}</p>
        <br/>
        <p className="flex justify-center px-4">Technologies Used: {item.techs}</p>
        <br/>
        <a className="flex justify-center underline" href={item.link}>Click here to view the Github repository</a>
      </div>
    ))}
  </div>
);

export default ProjectCard;