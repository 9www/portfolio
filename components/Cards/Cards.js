import Card from "./Card/Card";

function Cards(props) {
  const listItems = props.showCaseData.map((data) => (
    <Card
      key={data.id}
      icon={data.icon}
      type={data.type}
      title={data.title}
      sentence={data.sentence}
      path={"projects/" + `${data.path}`}
    />
  ));

  return (
    <div>
      <div className="cards-container">{listItems}</div>
    </div>
  );
}

export default Cards;
