import "../css/App.css";
import Fetch from "./Fetch";
import Background from "./Background";

function Header() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="title">
          <h1>NEW YIMI USERS</h1>
        </div>
        <div className="background">
          <Fetch />
        </div>
      </div>
      <div className="licencesCounter">
        <div>
          <h1>Licencias</h1>
        </div>
        <div className="counter">
          <Background />
        </div>
      </div>
    </div>
  );
}

export default Header;
