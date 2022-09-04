import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/chats">
        <Chatpage />
      </Route>
    </div>
  );
}

export default App;
