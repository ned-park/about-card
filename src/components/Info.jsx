import profile from "../assets/react.svg";

export default function Info() {
  return (
    <div className="info">
      {/* <img src={profile} className="info--profile" /> */}
       <div className="info--profile"></div>
      <h1 className="info--name">Ned Park</h1>
      <h2 className="info--title">Full-stack Developer</h2>
      <span className="info--website">
        <a href="https://ned-park.netlify.app">ned-park.netlify.app</a>
      </span>
      <div className="info--contact-links">
        <a href="mailto:nedpark_dev@protonmail.com" className="btn">
        <i class="fa-solid fa-envelope"></i>Email
        </a>
        <a href="https://linkedin.com/in/ned-park" className="btn btn-blue">
        <i class="fa-brands fa-linkedin"></i>LinkedIn
        </a>
      </div>
    </div>
  );
}
