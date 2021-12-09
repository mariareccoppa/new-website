import majima from "./Images/majima.png";
import rikiya from "./Images/rikiya.png";
function Drawing() {
  return (
    <div>
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
            <a href="../Maria/Contact.js">CONTACT</a>
          </li>
          <li>
            <a href="">LOCATIONS</a>
          </li>
        </ul>
      </nav>
      <div class="rowDrawing">
        <div class="columnDrawing">
          <img
            srcSet={majima}
            alt="Drawing of Yakuza 0 character Goro, Majima"
            width="600"
            height="268.6"
          />
          <h1>
            Goro, Majima from the Japanese game <i>Yakuza 0</i>
          </h1>
        </div>
        <div class="column">
          <img
            srcSet={rikiya}
            alt="Drawing of Yakuza 0 character Goro, Majima"
            width="600"
            height="337.2"
          />
        </div>
      </div>
    </div>
  );
}

export default Drawing;
