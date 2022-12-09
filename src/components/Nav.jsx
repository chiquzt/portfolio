import { Link } from "react-router-dom";
// svg
import { ReactComponent as Ins } from "../images/ins.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Close } from "../images/close.svg";

function Nav() {
    function openNav(e) {
        console.log("hello");
        document.querySelector(".navS").style.display = "none";
        document.querySelector(".menuS").style.display = "block";
    }
    function closeNav(e) {
        console.log("hello");
        document.querySelector(".navS").style.display = "block";
        document.querySelector(".menuS").style.display = "none";
    }

    return (
        <>
            <header>
                <div className="nav">
                    <ul className="menu">
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/illustration">
                                Illustration
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio/animebear">Animation - W</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/animesocks">
                                Animation - U
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio/landingpage">
                                Landing Page
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio/webdesign">Web Design</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/banner">Banner</Link>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/abbillust/">
                                <Ins className="ins" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navS">
                    <Menu className="hamburger" onClick={openNav} />
                </div>
                <ul className="menuS">
                    <Close className="close" onClick={closeNav} />
                    <li>
                        <Link className="optionS" to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="optionS" to="/portfolio/illustration">
                            Illustration
                        </Link>
                    </li>
                    <li>
                        <Link className="optionS" to="/portfolio/animebear">
                            Animation - W
                        </Link>
                    </li>
                    <li>
                        <Link className="optionS" to="/portfolio/animesocks">
                            Animation - U
                        </Link>
                    </li>
                    <li>
                        <Link className="optionS" to="/portfolio/landingpage">
                            Landing Page
                        </Link>
                    </li>
                    <li>
                        <Link className="optionS" to="/portfolio/webdesign">
                            Web Design
                        </Link>
                    </li>
                    <li>
                        <Link className="optionS" to="/portfolio/banner">
                            Banner
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/abbillust/">
                            <Ins className="ins" />
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
}
export default Nav;
