import DataAcademic from "../DataAcademic";

const Academic = () => {
  return (
    <div className="academic-grid-1x3">
      {DataAcademic.map(({ id, title, img, des_scription }) => (
        <div className="item-academic" key={id}>
          <img src={img} alt="" />
          <h3>{title}</h3>
          <span className="txt-academic">
            <p>{des_scription}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Academic;
