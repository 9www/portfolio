import Link from "next/link";
import { useRouter } from "next/router";
import BottomNavbar from "./bottomNavbar/bottomNavbar";

function Navbar() {
    const router = useRouter();

    return (
        <>
            {" "}
            <div className="navbar-container">
                <div className="navbar">
                    <div className="logo">
                        <Link href="/">Wingo Chan</Link>
                    </div>
                    <nav className="nav-top">
                        <ul className="nav-link">
                            <li
                                className={
                                    router.pathname == "/"
                                        ? "link-selected"
                                        : "link"
                                }
                            >
                                <Link href="/" passHref>
                                    <div className="text-link">WORK</div>
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
                                    <div className="text-link">ABOUT</div>
                                </Link>
                            </li>
                            <li className="link">
                                <a
                                    href="./portfolio/WingoCV.pdf"
                                    download="wingoCV.pdf"
                                >
                                    <div className="text-link">RESUME</div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <BottomNavbar />
        </>
    );
}

export default Navbar;
