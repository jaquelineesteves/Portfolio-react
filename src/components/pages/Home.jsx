import '../styles/style.css';
import myPicture from '../img/my-picture.jpg';

export default function Home() {
  return (
    <div >
      <h3 className ="container-title d-flex justify-content-center tree">About me</h3>
      <div className=" container d-flex">
      <img  src={myPicture} className="rounded img-thumbnail d-flex"></img>
      <p className ="hero">
      Hello, I’m Jaqueline, and I currently reside in Ontario. I have a passion for logical games and am studying coding at the University of Toronto School of Continuing Studies bootcamp. In my free time, I enjoy watching reality shows and TV series as they bring me joy. I firmly believe in striving to be the best version of myself in everything I do. One of my goals is to balance family and work successfully. <br></br>I am a highly motivated Junior Full Stack Developer with a genuine passion for creating efficient and effective solutions. 
      </p></div>
    </div>
    
  );
}
