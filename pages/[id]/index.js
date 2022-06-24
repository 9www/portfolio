import showCaseData from "../../components/Data/showcase.Json";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Head from "next/head";

function Project(props) {
    const router = useRouter();
    const { id } = router.query;

    const data = useMemo(() => showCaseData.find((data) => data.path == id));

    function titleSwitchCase(str) {
        if (typeof str === "string") {
            const word = str.split("-");
        } else {
            return;
        }
        for (var i = 0; i < word.length; i++) {
            word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
        }
        str = word.join(" ");
        return str;
    }

    function addBrTag(str) {
        if (str === undefined || str === null) return;
        const word = str.split("<br>").map((item, index) => (
            <div key={index}>
                {item}
                <br />
                <br />
            </div>
        ));
        str = word;
        return str;
    }

    return (
        <div>
            <Head>
                <title>Wingo - {titleSwitchCase(id)}</title>
            </Head>
            <div className="project-container">
                {data?.isImage ? (
                    <img
                        className="project-image"
                        src={data?.media[1].link}
                        alt={data?.imageClass}
                    ></img>
                ) : (
                    <iframe
                        className="project-video"
                        width="560"
                        height="315"
                        src={data?.media[0].link}
                        title={data?.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                <div className="project-title-container">
                    <div className="project-title">{data?.title}</div>
                    <div className="project-summary">
                        {data?.summary}
                        <br></br>
                        {data?.summary2 != "" ? data?.summary2 : ""}
                    </div>
                </div>
                <div className="project-category-container">
                    <div className="project-type">Type : {data?.type}</div>
                    <div className="project-year">Year : {data?.year}</div>
                </div>
                <div className="project-category-container">
                    <div className="project-language">
                        Programming language : {data?.language}
                    </div>
                    <div className="project-library">{data?.library}</div>
                </div>
                <div className="project-description-container">
                    <div className="project-description">
                        Description :<br></br>
                        {addBrTag(data?.description)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
