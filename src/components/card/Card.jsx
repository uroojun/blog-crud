import "./card.css";

const Card = (props) => {


  return (
    <>
      <div className="card">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="author">
          <h6>{props.author}</h6>
        </div>
        <div className="description">
          <h4>{props.description}</h4>
        </div>
        <div className="btn-div">
          <button
            onClick={() => {
              DeleteHandler(index);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              GetValues(index);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
