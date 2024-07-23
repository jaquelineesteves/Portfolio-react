import '../styles/style.css';


export default function Portfolio({projects}) {
  return (
    <div>
      <h3 className="container-title d-flex justify-content-center tree">Portfolio</h3>
      
      <div className=" container row"> 

        {projects.map((project) => (
          <div className="card col-5 m-3 border border-5 border-primary" key={project.id}>
            <img src={project.image} className="card-img-top" alt={project.alt} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-body">{project.description}</p>
              <a href={project.deployed} className="btn btn-outline-secondary">View Deployed</a>
              <a href={project.github} className="btn btn-outline-secondary">View GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}