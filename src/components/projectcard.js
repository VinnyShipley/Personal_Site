const projectArray = [
  {title: 'Budget App', description: 'A budget calculator to figure out a fair split of finances between multiple people with different incomes and any number of expenses', link: 'https://github.com/VinnyShipley/Budget-App'}
]

const ProjectCard = () => (
  <div className="flex justify-center">
    {projectArray.map((item) => (
      <div className="bg-accent rounded-lg py-8 mt-12" key={item.title}>
        <p className="flex justify-center">{item.title}</p>
        <br/>
        <p className="flex justify-center px-4">{item.description}</p>
        <br/>
        <a className="flex justify-center underline" href={item.link}>Click here to view the Github repository</a>
      </div>
    ))}
  </div>
);

export default ProjectCard;