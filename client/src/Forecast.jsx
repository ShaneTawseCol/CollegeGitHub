
// import '../src/project.css'
// import BUG from '../src/assets/Screenshot 2024-05-29 191704.png';
// import CAT from '../src/assets/Screenshot 2024-05-29 191620.png';
// import DB from '../src/assets/Screenshot 2024-05-29 192150.png';
// import MED from '../src/assets/Screenshot 2024-05-29 192016.png';
// import PS from '../src/assets/Screenshot 2024-05-29 191740.png';
export default function Projects(){
    return <>

    <main>
    <h1>Todays Weather</h1>
    <br></br>
    <h3></h3>
 <span className="skillDesc"></span> 

      <br></br>
      <section >
       
      <h2></h2>
      {/* <div id="myProjects">
      <ul>
        <li><a href="#kat">Go to Kitty Cat Selector</a></li>
        <li><a href="#doctor">Go to Medical Alert Application</a></li>
        <li><a href="#ladyBug">Go to Jumping Bug Game Application</a></li>
        <li><a href="#oracle">Go to E-Commerce DataBase</a></li>
        <li><a href="#pictureThis">Go to Photo Selecter</a></li>
        </ul>
        </div> */}
     
        <br></br>
        <h2>7 Day Forecast</h2><br></br>
        <div className="worksImgs">
                <h3 id="ladyBug">Jumping Bug Game</h3>
                <p></p>
                 <img src={BUG} alt="project1" className="projectImg" />
                 <br></br>
                 <br></br>
                 <h3 id="kat">Kitty Cat Selector</h3>
                 <p>
                 </p>
                 <img src={CAT} alt="project2" className="projectImg" />
                 <br></br>
                 <br></br>
                 <h3 id="oracle">SQL E-Commerce Database</h3>
                 <p>
                 </p>
                 <img src={DB} alt="project3" className="projectImg" />     
                 <br></br>
                 <br></br>
                 <h3 id="doctor">Medical Alerts Application</h3>
                 <p>
                 </p>
                 <img src={MED} alt="project4" className="projectImg" />
                 <br></br>
                 <br></br>
                 <h3 id="pictureThis">API Photo Selector</h3>
                 <p>
                 </p>
                 <img src={PS} alt="project5" className="projectImg" /> 
             </div>

<button id="pipelineBtn" alt="myWork"><a href="./components/contact">See Whats To Come</a></button>
  
</section>
</main>
</>
}