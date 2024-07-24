import '../styles/style.css';
import myPicture from '../img/my-picture.jpg';


export default function Home() {
  return (
    <div>
      <h3 className ="container-title d-flex  tree">About me:</h3>
      <div className="container"><img src={myPicture} className="rounded"></img> </div>
      <div className= "content">
      <p className ="hero">
      Hello, I’m Jaqueline Esteves,<br></br>I am a motivated Junior Full Stack Developer with a genuine passion for creating efficient and effective solutions,  I love learning new technologies and methodologies quickly, I currently reside in Ontario. I have a passion for logical games and Iam studying coding at the University of Toronto School of Continuing Studies bootcamp. In my free time, I enjoy watching reality shows and TV series as they bring me joy. I firmly believe in striving to be the best version of myself in everything I do. One of my goals is to balance family and work successfully. 
      </p>
      
      </div>
      
    </div>
    
  );
}
