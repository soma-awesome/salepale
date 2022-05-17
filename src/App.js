import { Link } from "react-router-dom";
import "./App.css";
import { CustomButton } from "./components/CustomButton";
function handleButton(route) {
  document.location.href(route);
}
function App() {
  return (
    <div>
      <Link to={"sale"}>
        <CustomButton
          message={"살래"}
          color={"red"}
          onClick={() => handleButton("/pale")}
          isSale={true}
        />
      </Link>
      <Link to="/pale">
        <CustomButton
          message={"팔래"}
          color={"blue"}
          onClick={() => handleButton("/sale")}
        />
      </Link>
    </div>
  );
}

export default App;
