import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
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
              <p>
                Patreon is a membership platform that makes it easy for artists and creators to get paid, where artists get paid through patron.On Patreon, you can let your fans become active participants in the work they love by offering them a monthly membership.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>Router</li>
                <li>React</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MUI lib</li>
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
              <p>
                Experience a seamless weather-tracking journey with my Vue.js application. Users enjoy personalized weather updates with detailed information like temperature, humidity, and wind speed. Explore hourly and 7-day forecasts, access saved searches, and navigate effortlessly through a visually appealing UI for city-wise weather exploration.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue JS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>DOM</li>
                <li>API</li>
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
              <p>
                "Dive into a user-friendly Vue.js web app presenting a sleek and efficient calculator. Crafted with Vue.js, CSS, HTML, and JS, the app initializes at 0 and boasts features like direct percentile calculation, multiple number inputs, customizable themes, and seamless performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vue JS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>DOM</li>
                <li>API</li>
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
              <p>
                An Indian e-commerce website for branded beauty products made using MERN stack where people from anywhere in the world can buy or sell their products. It has build in authentication along with auto SignIn functionality.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node</li>
                <li>JavaScript</li>
                <li>DOM</li>
                <li>API</li>
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
              <p>
                An E-commerce website for lifestyle and beauty products made using MERN stack where people from anywhere in the world can buy or sell their products. It has build in authentication along with auto SignIn functionality.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>DOM</li>
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
              <p>
                clone of Youtube using Api shows, trending & searched videos plays it too.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>DOM</li>
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
              <p>
                It is a Movie_informer app which provides movies information  using movie api with Closure.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>DOM</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}