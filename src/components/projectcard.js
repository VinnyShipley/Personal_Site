const projectArray = [
  {title: 'Budget App', description: 'An app to help with budgeting'}
]

const ProjectCard = () => (
  <div className="flex justify-center">
    {projectArray.map((item) => (
      <div key={item.title}>
        {item.title}
        <br/>
        {item.description}
      </div>
    ))}
  </div>
);

export default ProjectCard;