import { useLocation } from "react-router-dom";

export const Page1DetailsA = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailsA</h1>
    </div>
  );
};
