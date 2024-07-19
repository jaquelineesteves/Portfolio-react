import '../styles/style.css';

export default function Contact() {
  return (
    <div>
      <h3 className ="container-title d-flex justify-content-center tree">Contact Page</h3>
      <div className="mb-3">
      <label  className="form-label">Name</label>
      <input type="email" className="form-control " id="nameInput" placeholder="Your name"></input>
      <label  className="form-label">Email address</label>
      <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"></input>
      <label  className="form-label">Message me:</label>
      <input type="email" className="form-control " id="messageInput" placeholder="write you message" ></input>
      </div>
    </div>
  );
}
