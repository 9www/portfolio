function Project(props) {
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
            <div className="project-container">
                {/* <video className={props.videoClass} controls>
                    <source src={props.videoLink} type="video/mp4"></source>
                </video> */}

                <iframe
                    className={props.videoClass}
                    width="560"
                    height="315"
                    src={props.videoLink}
                    title={props.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <img
                    className={props.imageClass}
                    src={props.imageLink}
                    alt={props.imageClass}
                ></img>

                <div className="project-title-container">
                    <div className="project-title">{props.title}</div>
                    <div className="project-summary">
                        {props.summary}
                        <br></br>
                        {props.summary2 != "" ? props.summary2 : ""}
                    </div>
                </div>
                <div className="project-category-container">
                    <div className="project-type">Type : {props.type}</div>
                    <div className="project-year">Year : {props.year}</div>
                </div>
                <div className="project-category-container">
                    <div className="project-language">
                        Programming language : {props.language}
                    </div>
                    <div className="project-library">{props.library}</div>
                </div>
                <div className="project-description-container">
                    <div className="project-description">
                        Description :<br></br>
                        {addBrTag(props.description)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
