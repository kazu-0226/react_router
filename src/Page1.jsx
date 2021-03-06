import { Link, useHistory } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  const onClickDetailA = () => {
    history.push({ pathname: "/page1/detailsA", state: arr });
  };
  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detailsA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailsB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
