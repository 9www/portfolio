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
        <title>Wingo - {props.title}</title>
      </Head>
      <div className="project-container">
        {props?.isImage ? (
          <img
            className="project-image"
            src={props?.media2.link}
            alt={props?.imageClass}
          ></img>
        ) : (
          <iframe
            className="project-video"
            width="560"
            height="315"
            src={props?.media1.link}
            title={props?.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <div className="project-title-container">
          <div className="project-title">{props?.title}</div>
          <div className="project-summary">
            {props?.summary}
            <br></br>
            {props?.summary2 != "" ? props?.summary2 : ""}
          </div>
        </div>
        <div className="project-category-container">
          <div className="project-type">Type : {props?.type}</div>
          <div className="project-year">Year : {props?.year}</div>
        </div>
        <div className="project-category-container">
          <div className="project-language">
            Programming language : {props?.language}
          </div>
          <div className="project-library">{props?.library}</div>
        </div>
        <div className="project-description-container">
          <div className="project-description">
            Description :<br></br>
            {addBrTag(props?.description)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

export async function getStaticPaths() {
  const paths = showCaseData.map((data, index) => {
    //console.log(showCaseData);
    return {
      params: {
        path: data.path,
      },
    };
  });
  //console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params = {} } = {}) {
  // console.log(showCaseData);
  const currentData = showCaseData.find((i) => i.path === params.path);
  console.log(currentData.media[0], "test");
  return {
    props: {
      id: currentData.id,
      path: currentData.path,
      sentence: currentData.sentence,
      title: currentData.title,
      summary: currentData.summary,
      type: currentData.type,
      year: currentData.year,
      language: currentData.language,
      library: currentData.library,
      description: currentData.description,
      isImage: currentData.isImage,
      media1: currentData.media[0],
      media2: currentData.media[1],
    },
  };
}
