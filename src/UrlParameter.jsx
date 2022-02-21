import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメーターは {id} です</p>
      <p>クエリパラメータは {query.get("name")}</p>
    </div>
  );
};
