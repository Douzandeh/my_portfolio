import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logoDH.png";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/Hossein-Douzandeh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Douzandeh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsGithub />
        </a>
        <a
          href="mailto:douzandeh.k@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <MdEmail />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
