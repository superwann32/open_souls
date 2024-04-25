import { Link } from "react-router-dom";
import "./LosingScreen";
import "./WinningScreen.scss";

function WinningScreen() {
  return (
    <div className="victory-container">
      <div className="victory-content">
        <h1>Congratulation you finished your quest!</h1>
        <p>Here is your reward:</p>
        <p>The password below will unlock a new game mod.</p>
        <p>Enter the code below in the main screen :</p>
        <h2>Maxicommit</h2>
      </div>
      <Link to="/" className="menu-button">
        Menu
      </Link>
    </div>
  );
}

export default WinningScreen;
