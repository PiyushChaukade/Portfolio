import { Container } from "./styles";
import Piyush from "../../assets/piyush.png";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Who I am</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>

        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Experienced software developer with a strong background in full-stack development, specializing in Python, JavaScript, and modern frameworks. Proven track record of designing and implementing scalable and efficient solutions for diverse projects. Committed to fostering team collaboration and leveraging leadership skills to drive project success. Known for adaptability and flexibility in navigating complex challenges. Demonstrates strong critical thinking abilities to deliver impactful solutions while continuously embracing new technologies and methodologies in the dynamic software development landscape</p>
        </ScrollAnimation>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Piyush} alt="Selvakumar" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
