const projectArray = [
  {title: 'Budget App', description: 'An app to help with budgeting', link: 'https://github.com/VinnyShipley/Budget-App'}
]

const ProjectCard = () => (
  <div className="flex justify-center">
    {projectArray.map((item) => (
      <div className="bg-accent" key={item.title}>
        {item.title}
        <br/>
        {item.description}
        <br/>
        <a href={item.link}>Click here to view it</a>
      </div>
    ))}
  </div>
);

export default ProjectCard;