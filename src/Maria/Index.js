import Molloy from "./Images/molloy.png";
import helloKitty from "./Images/helloKitty.gif";
import "./styles.css";
import { HashLink } from "react-router-hash-link";
function Index() {
  return (
    <div>
      <header>
        <h1> Hello there! My name is Maria Reccoppa :)</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="./Maria/Drawing.js">DRAWING PORTFOLIO</a>
          </li>
          <li>
            <a href="./Maria/Contact.js">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div class="table">
        <div class="row">
          <section id="side" class="table-cell">
            <p>
              <img
                src={Molloy}
                class="thumbnail"
                alt="Molloy College logo"
                width="160px"
                height="100px"
              />
            </p>
            <p>Hover your mouse over Hello Kitty to make her dissapear!</p>
            <div class="overlay">
              <img src={helloKitty} alt="Hello Kitty Gif" />
            </div>
            <p>Video walkthrough explaining the code behind my website! </p>
            <div id="video">
              <embed
                src="https://www.youtube.com/embed/jNQXAC9IVRw"
                allowscriptaccess="always"
                allowFullScreen={true}
                width="340"
                height="300"
              />
            </div>
          </section>
          <main>
            <h2>About me:</h2>
            <p>
              Hello! I am Maria. I am a Japanese 19 year old hoping to make an
              excellent website! I am a full-time sophomore currently studying
              Computer Information Sytsems at Molloy College!
            </p>
            <h2> My hobbies include... </h2>
            <ul>
              <li> Playing video games </li>
              <li> Watching TV </li>
              <li> Learning Japanese </li>
              <li> Animation </li>
              <li>
                Drawing
                <HashLink to="./Maria/Drawing.js#jimmy">
                  (My favorite drawing i did!)
                </HashLink>
              </li>
            </ul>
            <h2> What are my favorite video game franchises? </h2>
            <ol>
              <li>Yakuza</li>
              <li>Half-Life</li>
              <li> Mass Effect </li>
              <li> Grand Theft Auto </li>
              <li> Halo </li>
              <li> Final Fantasy</li>
            </ol>
            <h2> What I'm working on... </h2>
            <p>
              I am studying to obtain my MOS certification in Excel this
              semester.
            </p>
            <p>
              I am also teaching myself 3D software such as Maya and Blender. My
              goal is to be able to produce basic renders of objects!
            </p>
            <h2> What has coding taught me? (so far) </h2>
            <p>
              Coding has taught me to continue pushing through my problems no
              matter what. There is always a solution for everything!
            </p>
            <blockquote>
              "You didn't come this far to only come this far."
            </blockquote>
            <h2> What are my goals for the future? </h2>
            <p>
              I would love to learn Python, as it is one of the most common
              programming languages used.
            </p>
            <p>
              More personal goals include becoming fluent in Japanese, learning
              to draw better, and eating healthier!
            </p>
          </main>
        </div>
      </div>
      <footer>
        &copy; 2021, Maria Reccoppa
        <br />I started coding this website on 9.10.21. I am excited to see how
        far it will come!
      </footer>
    </div>
  );
}

export default Index;
