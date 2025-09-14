import "./App.css";

function App() {
  const headerContent = "Blogger";
  const FooterContent = "CopyRights by R.Hariharan";

  return (
    <>
      <header className="Header">
        <h1>{headerContent}</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <main className="Main"></main>
      <footer className="Footer">
        <h1 className="Footer_Title">{FooterContent}</h1>
        <section className="Footer_Content">
          <section className="Reference">
            <h3>Reference</h3>
            <menu>
              <li>
                <a
                  href="https://developer.mozilla.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  MDN Docs
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  W3Schools
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stack Overflow
                </a>
              </li>
            </menu>
          </section>

          <section className="TechnicalContent">
            <h3>Technical Content</h3>
            <menu>
              <li>
                <a href="#articles">Articles</a>
              </li>
              <li>
                <a href="#tutorials">Tutorials</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </menu>
          </section>

          <section className="SportsContent">
            <h3>Sports Content</h3>
            <menu>
              <li>
                <a href="#football">Football</a>
              </li>
              <li>
                <a href="#cricket">Cricket</a>
              </li>
              <li>
                <a href="#basketball">Basketball</a>
              </li>
            </menu>
          </section>

          <section className="SocialAffaires">
            <h3>Social Affairs</h3>
            <menu>
              <li>
                <a href="#news">Latest News</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
            </menu>
          </section>
        </section>
      </footer>
    </>
  );
}

export default App;
