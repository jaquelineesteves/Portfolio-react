import "../styles/style.css";

export default function Resume() {
  return (
    <div>
      <h3 className="container-title d-flex  tree ">
        Resume
      </h3>
      <div className="container">
      <h5>Proficiencies:</h5> 
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col list">HTML</div>
          <div className="col list">CSS</div>
          <div className="col list">JavaScript</div>
          <div className="col list">React.js</div>
          <div className="col list">GitHub</div>
          <div className="col list">API's </div>
          <div className="col list">Node.js,NPM</div>
          <div className="col list">Express.js</div>
          <div className="col list">PostgreSQL,sequelize, MongoDB</div>
        </div>
      </div>
      <div className="m-5">
        <div>
      <h6>You can find my resume here: </h6>
      </div>
      <div>
      <a href="/documents/resume-jaqueline.pdf" download className="btn btn-outline-secondary btn-sm">
         Jaqueline's Resume
      </a>
      </div>
      </div>
    </div>
  );
}
