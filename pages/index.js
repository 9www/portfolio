import Head from "next/head";
import Cards from "../components/Cards/Cards";
import showCaseData from "../components/Data/showcase.Json";

function Work() {
    return (
        <div>
            <Head>
                <title>Wingo</title>
            </Head>
            <div className="work-container">
                <Cards showCaseData={showCaseData} />
            </div>
        </div>
    );
}

export default Work;
