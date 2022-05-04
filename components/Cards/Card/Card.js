import Link from "next/link";

function Card(props) {
    return (
        <div>
            <div className="card hover">
                <div className="card-top-container">
                    <img
                        className="card-icon"
                        src={"./images/card-icon/" + props.icon}
                        alt="icon"
                    ></img>
                    <div className="card-type">{props.type}</div>
                </div>
                <div className="card-container">
                    <div className="card-title">{props.title}</div>
                    <div className="card-sentence">{props.sentence}</div>
                    <Link href={"/project/" + `${props.path}`} passHref>
                        <div className="card-button">View More</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
