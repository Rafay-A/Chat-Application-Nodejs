import "./App.css";
import Homepage from "./pages/homePage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/chatPage";

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
