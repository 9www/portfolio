import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter();

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <Link href="/">Wingo Chan</Link>
                </div>
                <nav>
                    <ul className="nav-link">
                        <li
                            className={
                                router.pathname == "/"
                                    ? "link-selected"
                                    : "link"
                            }
                        >
                            <Link href="/" passHref>
                                <div>
                                    <div className="text-link">WORK</div>
                                    <div className="icon-link-container">W</div>
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
                                <div>
                                    <div className="text-link">ABOUT</div>
                                    <div className="icon-link-container">A</div>
                                </div>
                            </Link>
                        </li>
                        <li className="link">
                            <a
                                href="./portfolio/WingoCV.pdf"
                                download="wingoCV.pdf"
                            >
                                <div>
                                    <div className="text-link">RESUME</div>
                                    <div className="icon-link-container">R</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
