import "./skills.scss";
import html from "../../assets/icons/html.svg"
import css from "../../assets/icons/css.svg"
import javascript from "../../assets/icons/javascript.svg"
import git from "../../assets/icons/git.svg"
import github from "../../assets/icons/github.svg"



const Skills = () => {
    return (
        <div className="skills_container" id="skills">
            <div className="skills_content">
                <h2>My Skills</h2>
                <div className="images_container">
                     <img src={html} alt="html logo" className="img_logo"/>
                     <img src={css} alt="css logo" className="img_logo"/>
                     <img src={javascript} alt="javascript logo" className="img_logo"/>
                     <img src={git} alt="git logo" className="img_logo"/>
                     <img src={github} alt="github logo" className="img_logo"/>
                </div>

            </div>
        </div>
    )
}

export default Skills;