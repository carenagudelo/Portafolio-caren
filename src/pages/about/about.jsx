import "./about.scss";
import caren from "../../assets/img/caren.png"

const About = () => {
    return (
        <div className="about_container" id="about">
            <div>
                <img src={caren} alt="foto de caren" className="img"/>
            </div>
            <div className="about_content">
                <h2>About me</h2>
                <p>Junior Front-End Developer with a passion for building
beautiful and user-friendly web applications. I have a
good understanding of HTML, CSS, and JavaScript, and I
am always looking to learn new technologies. I am a
quick learner and I am eager to contribute to a team.
</p>
            </div>
        </div>
        
    )
}

export default About;