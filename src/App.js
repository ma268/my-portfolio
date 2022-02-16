import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">
          <a href="/">
            Michael<span className="secondary-color">Asaad</span>
          </a>
        </h1>
        <div className="middle-nav">
          <ul className="nav">
            <li className="nav-link">
              <a href="/work">Work</a>
            </li>
            <li className="nav-link">
              <a href="/about">About</a>
            </li>
            <li className="nav-link">
              <a href="/products">Products</a>
            </li>
            <li className="nav-link">
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="cta">
          <a className="button" href="#cta">
            Contact
          </a>
        </div>
      </nav>
      <header>
        <p>Full-Stack Software Engineer</p>
      </header>
    </div>
  );
}

export default App;
