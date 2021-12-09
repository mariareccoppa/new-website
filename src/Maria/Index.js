import Molloy from "./Images/molloy.png";
import helloKitty from "./Images/helloKitty.gif";
import "./styles.css";
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
            <a href="">BLOG</a>
          </li>
          <li>
            <a href="./Maria/Drawing.js">DRAWING PORTFOLIO</a>
          </li>
          <li>
            <a href="./Maria/Contact.js">CONTACT</a>
          </li>
          <li>
            <a href="">LOCATIONS</a>
          </li>
        </ul>
      </nav>
      <div class="row">
        <section id="side" class="table-cell">
          <p>
            <img src={Molloy} alt="Molloy College logo" />
          </p>
          <p>Hover your mouse over Hello Kitty to make her dissapear!</p>
          <div class="overlay">
            <img src={helloKitty} alt="Hello Kitty Gif" />
          </div>
          <a href="https://github.com/mariareccoppa" target="_blank">
            My GitHub
          </a>
        </section>
        <main>
          <h2> About me: </h2>
          <p>
            Hello! I am Maria. I am a Japanese 19 year old hoping to make an
            excellent website! I am a full-time sophomore currently studying
            Computer Information Sytsems at Molloy College!
          </p>
          <h3> My hobbies include... </h3>
          <ul>
            <li> Playing video games </li>
            <li> Coding </li>
            <li> Learning Japanese </li>
            <li> Animation </li>
            <li> Drawing (make sure to check out my portfolio!)</li>
          </ul>
          <h3> What I'm working on... </h3>
          <p>
            I am studying to obtain my MOS certification in Excel this semester.
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
          <h3> What are my goals for the future? </h3>
          <p>
            {" "}
            I would love to learn Python, as it is one of the most common
            programming languages used.{" "}
          </p>
          <p>
            {" "}
            More personal goals include becoming fluent in Japanese, learning to
            draw better, and eating healthier!{" "}
          </p>
        </main>
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
