import '../styles/style.css';


export default function Portfolio({projects}) {
  return (
    <div>
      <h3 className="container-title d-flex tree">Portfolio</h3>
      
      <div className=" container row "> 

        {projects.map((project) => (
          <div className="card col-10 col-md-5  m-3  " key={project.id}>
            <img src={project.image} className="card-img-top" alt={project.alt} />
            <div className="">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-body">{project.description}</p>
              <a href={project.github} className="btn btn-outline-secondary m-3">View GitHub</a>
              {project.deployed && (
                <a href={project.deployed} className="btn btn-outline-secondary m-3">
                  View Deployed
                </a>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}