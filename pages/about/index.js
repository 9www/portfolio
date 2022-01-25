import Head from "next/head";

function About() {
    return (
        <div>
            <Head>
                <title>Wingo - About</title>
            </Head>
            <div className="about-container">
                <div className="left-container">
                    <img
                        className="self-image"
                        src="./images/wingo-self.jpg"
                        alt="wingo-self"
                    ></img>
                </div>
                <div className="right-container">
                    <div className="title">
                        Hello, 😑 I`m <div className="name">Wingo</div> .
                    </div>
                    <div
                        className="description-container"
                        style={{ borderRadius: "10px 0 0 0" }}
                    >
                        <div className="description">
                            👨🏻‍🎨 Born in Multimedia & Creative Coding
                        </div>
                        <div className="description-selected">
                            👨🏻‍🎨 UIUX | Multimedia Field | P5.js
                        </div>
                    </div>
                    <div className="description-container">
                        <div className="description">
                            🎮 Game Develop in University Period
                        </div>
                        <div className="description-selected">
                            🎮 UnityC# | Game Deisgn | Pixel Art
                        </div>
                    </div>
                    <div
                        className="description-container"
                        style={{ borderRadius: "0 0 10px 0 " }}
                    >
                        <div className="description">
                            👨🏻‍💻 Now, I am Frontend developer
                        </div>
                        <div className="description-selected">
                            👨🏻‍💻 React.js | Vue.js | Javascript | SCSS
                        </div>
                    </div>
                    <div className="description-text-container">
                        <div className="description-text">
                            Hello, I`m{" "}
                            <a className="description-main-point">Wingo</a>. I
                            am a{" "}
                            <a className="description-main-point">
                                Frontend Developer
                            </a>{" "}
                            in{" "}
                            <a
                                href="http://www.ipengtai.com/"
                                className="description-link"
                            >
                                Pengtai Greater China Company Limited
                            </a>
                            . I was{" "}
                            <a
                                href="https://konteccreative.com/"
                                className="description-link"
                            >
                                Kontec Development LTD`s
                            </a>{" "}
                            Junior Software Engineer around 7 months. I
                            graduated from{" "}
                            <a
                                href="https://www.cityu.edu.hk/"
                                className="description-link"
                            >
                                City University of Hong Kong
                            </a>{" "}
                            with a Bachelor of Arts and Science in New Media.
                            Also, I like creative thinking, learning. Now, I am
                            mainly studing algorithms and data structure, I hope
                            to be a Master of Frontend Developer / Engineer.
                        </div>
                        <br></br>
                        <div className="description-bio">
                            Wingo born in design and multimedia field in early
                            periods, also Wingo studied creative coding and game
                            field in University periods. Moreover, Wingo joined
                            “Software Art Studio” coding course in final year,
                            Wingo understanding a lot of knowledges such as
                            algorithms, Crypto theory (NFT, PoS & PoW), and
                            through API make some artwork. It is a turning point
                            for him in final year, he quit a game develop field
                            and mainly studing and learning in Frontend field.
                            Now, Wingo is a Frontend developer.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
