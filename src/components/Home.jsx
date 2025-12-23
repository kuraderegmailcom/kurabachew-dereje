import "../styles/home.css";
import profile from "../assets/bg.jpg";

function Home() {
  return (
    <section id="home" className="home">
      <img src={profile} alt="Kurabachew Dereje" />
      <h1>Kurabachew Dereje</h1>
      <p>Full-Stack Developer | React.js , Node.js and mongoDB </p>
      
<a href="/kurabachew-cv.pdf" download className="btn">Download CV</a>
    </section>
  );
}

export default Home;
