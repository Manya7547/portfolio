import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Cloud from './Cloud'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
            <Cloud/>
        </div>
    </section>
  );
}

export default Skills;