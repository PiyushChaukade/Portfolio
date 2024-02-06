import { Container } from "./styles";
import experience from "../../assets/experience.jpg";
import ScrollAnimation from "react-animate-on-scroll";


export function Experience() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Professional Experience</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>Company : Critical Mention an Onclusive Company</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Designation : Full Stack Web Developer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Started on : April 2022 - Feb 2022</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Full-stack Developer with 2 years of experience in the IT industry, specializing
            in front-end and MERN stack technologies. Demonstrated success in
            delivering creative and robust solutions. Dedicated to enhancing team
            capabilities and driving project success through innovative skills. Poised to
            bring immediate value to your development initiatives</p>

        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={experience} alt="experience" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
