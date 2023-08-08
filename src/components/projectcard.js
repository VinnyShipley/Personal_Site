const projectArray = [
  {title: 'Budget App', description: 'A budget calculator to figure out a fair split of finances between multiple people with different incomes and any number of expenses', link: 'https://github.com/VinnyShipley/Budget-App'}
]

const ProjectCard = () => (
  <div className="flex justify-center">
    {projectArray.map((item) => (
      <div className="bg-accent" key={item.title}>
        <p className="flex justify-center">{item.title}</p>
        <br/>
        <p className="flex justify-center">{item.description}</p>
        <br/>
        <a className="flex justify-center" href={item.link}>Click here to view it</a>
      </div>
    ))}
  </div>
);

export default ProjectCard;