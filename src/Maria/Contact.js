import "./styles.css";
function Contact() {
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
            <a href="../Maria/Drawing.js">DRAWING PORTFOLIO</a>
          </li>
          <li>
            <a href="./Maria/Contact.js">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div id="contact">
        <p>Get in contact with me!</p>
        <p>
          <a
            href="https://github.com/mariareccoppa"
            rel="noreferrer"
            target="_blank"
          >
            My GitHub
          </a>
        </p>
        <p>
          <a href="mailto:mariareccoppa@gmail.com">My Email</a>
        </p>
        <p>
          <a
            href="https://twitter.com/MariaReccoppa"
            rel="noreferrer"
            target="_blank"
          >
            My Twitter
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
