const Concepts = (props) => {
  return (
    <div>
      {" "}
      <ul id="concepts">
        <li className="concept">
          <img src={props.itens[0].image} alt={props.itens[0].title} />
          <h2>{props.itens[0].title}</h2>
          <p>{props.itens[0].description}</p>
        </li>
        <li className="concept">
          <img src={props.itens[1].image} alt={props.itens[1].title} />
          <h2>{props.itens[0].title}</h2>
          <p>{props.itens[0].description}</p>
        </li>
        <li className="concept">
          <img src={props.itens[2].image} alt={props.itens[2].title} />
          <h2>{props.itens[0].title}</h2>
          <p>{props.itens[0].description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Concepts;
