import Link from "next/link";
import { useRouter } from "next/router";

function bottomNavbar() {
    const router = useRouter();

    return (
        <div className="bottom-navbar-container">
            <nav className="bottom-navbar">
                <ul className="nav-link">
                    <li
                        className={
                            router.pathname == "/" ? "link-selected" : "link"
                        }
                    >
                        <Link href="/" passHref>
                            <div className="icon-container">
                                <img
                                    className="icon"
                                    src="./images/navbar-icon/Work.png"
                                ></img>
                            </div>
                        </Link>
                    </li>
                    <li
                        className={
                            router.pathname == "/about"
                                ? "link-selected"
                                : "link"
                        }
                    >
                        <Link href="/about" passHref>
                            <div className="icon-container">
                                <img
                                    className="icon"
                                    src="./images/navbar-icon/About.png"
                                ></img>
                            </div>
                        </Link>
                    </li>
                    <li className="link">
                        <a
                            href="./portfolio/WingoCV.pdf"
                            download="wingoCV.pdf"
                        >
                            <div className="icon-container">
                                <img
                                    className="icon"
                                    src="./images/navbar-icon/CV.png"
                                ></img>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default bottomNavbar;
