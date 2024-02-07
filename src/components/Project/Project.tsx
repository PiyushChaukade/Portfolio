import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import PatreonImg from "../../assets/Patreon.png"
import WeatherApp from "../../assets/Weather.png"
import Calculator from "../../assets/Calculator.png"
import NykaaClone from "../../assets/Nykaa1.jpg"
import HMClone from "../../assets/HM.jpg"
import YouTubeClone from "../../assets/Youtube.jpg"
import MovieClone from "../../assets/Movie.jpg"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/PiyushChaukade/Patreon-clone" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://patreon-clone.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Patreon_Clone</h3>
              <img className="Myproject" src={PatreonImg} alt="PatreonImg" />
              <div>
                Patreon is a membership platform that empowers artists and creators to get paid directly from patrons, enabling fan engagement through monthly memberships..
              </div>
              <p className="container">
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Router</li>
                <li>React JS</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/PiyushChaukade/Weather_app_VueJs" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://weather-app-vue-js-piyush.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Vue.js Weather App</h3>
              <img className="Myproject" src={WeatherApp} alt="WeatherApp" />
              <div>
                Explore a seamless weather-tracking journey with my Vue.js app. Enjoy personalized updates on temperature, humidity, and wind speed, including hourly and 7-day forecasts.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue JS</li>
                <li>CSS</li>
                <li>DOM</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/PiyushChaukade/calculator_vueJS" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://calculator-vue-js-peach.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Vue.js Calculator App</h3>
              <img className="Myproject" src={Calculator} alt="Calculator" />
              <div>
                Dive into a sleek Vue.js calculator web app, offering direct percentile calculation, multiple inputs, customizable themes, and seamless performance.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue JS</li>
                <li>CSS</li>
                <li>DOM</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/PiyushChaukade/Naykaa-Clone" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://nykaa-clonemasi.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Nykaa_Clone</h3>
              <img className="Myproject" src={NykaaClone} alt="NykaaClone" />
              <div>
                Explore an Indian e-commerce site for branded beauty products, built with MERN stack. Buy or sell globally with built-in authentication and auto sign-in.
              </div>

            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/PiyushChaukade/H-and-M-Project" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://akshaythakur1995.github.io/H-and-M-Project/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>H & M_Clone</h3>
              <img className="Myproject" src={HMClone} alt="HMClone" />
              <div>
                Discover a MERN-crafted E-commerce hub for lifestyle and beauty essentials. Facilitate global buying and selling, ensuring a seamless online shopping experience.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/PiyushChaukade/You-Tube" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://piyushchaukade.github.io/You-Tube/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>YouTube App</h3>
              <img className="Myproject" src={YouTubeClone} alt="YouTubeClone" />
              <div>
                Explore a YouTube replica featuring trending and searched videos, with seamless play functionality powered by API. Enjoy hassle-free video browsing, watching, and discovery.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/PiyushChaukade/Movie_informer" target="_blank" rel="noreferrer">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Github</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <div className="project-links">
                <a href="https://620527a864f67d0096fab414--movie-finder-piyush.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Movie_informer App</h3>
              <img className="Myproject" src={MovieClone} alt="MovieClone" />
              <div>
                Explore a Movie Informer app with detailed movie info via API. Stay informed and entertained, designed for cinephiles.
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}