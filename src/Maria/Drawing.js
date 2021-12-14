import majima from "./Images/majima.png";
import rikiya from "./Images/rikiya.png";
import jimmy from "./Images/jimmy.png";
import "./styles.css";
function Drawing() {
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
            <a href="../Maria/Contact.js">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div class="drawing">
        <img
          class="border"
          srcSet={majima}
          alt="Drawing of Yakuza 0 character Goro, Majima"
          width="893.5"
          height="400"
        />
        <figcaption>
          Goro, Majima from the Japanese game <i>Yakuza 0</i>
        </figcaption>
      </div>
      <div class="drawing">
        <img
          class="border"
          srcSet={rikiya}
          alt="Drawing of Yakuza 3 character Shimabukoro, Rikiya"
          width="978.6"
          height="550"
        />
        <figcaption>
          Shimabukoro, Rikiya from the Japanese game <i>Yakuza 3</i>
        </figcaption>
      </div>
      <div id="jimmy"> </div>
      <div class="drawing">
        <img
          class="border"
          srcSet={jimmy}
          alt="Drawing of Bully character Jimmy Hopkins"
          width="808.6"
          height="600"
        />
        <figcaption>
          Jimmy Hopkins from the 2006 game <i>Bully</i>
        </figcaption>
      </div>
    </div>
  );
}

export default Drawing;
