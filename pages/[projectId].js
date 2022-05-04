import { useRouter } from "next/router";
import Head from "next/head";
import showCaseData from "../components/Data/showcase.Json";
import Project from "./[projectId]/project/Project";

export default function ProjectId() {
    const router = useRouter();
    const { projectId } = router.query;

    function titleSwitchCase(str) {
        const word = str.split("-");
        for (var i = 0; i < word.length; i++) {
            word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
        }
        str = word.join(" ");
        return str;
    }
    const project = showCaseData.map((data, index) =>
        data.path == projectId ? (
            data.isImage == 0 ? (
                <div key={index}>
                    <Project
                        videoClass="project-video"
                        videoLink={data.media[0].link}
                        title={data.title}
                        summary={data.summary}
                        summary2={data.summary2}
                        type={data.type}
                        year={data.year}
                        language={data.language}
                        library={data.library}
                        description={data.description}
                    />
                </div>
            ) : (
                <div key={index}>
                    <Project
                        imageClass="project-image"
                        imageLink={data.media[1].link}
                        title={data.title}
                        summary={data.summary}
                        summary2={data.summary2}
                        type={data.type}
                        year={data.year}
                        language={data.language}
                        library={data.library}
                        description={data.description}
                    />
                </div>
            )
        ) : (
            ""
        )
    );
    return (
        <div>
            <Head>
                <title>
                    {projectId
                        ? "Wingo - " + titleSwitchCase(projectId)
                        : "Wingo"}
                </title>
            </Head>
            {project}
        </div>
    );
}
