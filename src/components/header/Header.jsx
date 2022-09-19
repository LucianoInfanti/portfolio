import "./header.css";

export default function Header(props) {
  return (
    <div className="headerWrapper">
      <div className="leftWrapper">
        <div class="logoWrapper">
          <a href="/" className="motionHover">
            Luciano Infanti
          </a>
        </div>

        <div className="info">{props.info}</div>
      </div>
      <div class="socialWrapper">
        <a
          href="https://www.linkedin.com/in/luciano-infanti/"
          className="motionHover"
        >
          LinkedIn
        </a>
        <span>,</span>
        <a href="https://github.com/LucianoInfanti" className="motionHover">
          GitHub
        </a>
        <span>,</span>
        <a href="https://savee.it/lucianoinfanti/" className="motionHover">
          Savee
        </a>
      </div>
    </div>
  );
}
