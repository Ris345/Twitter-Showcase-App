import "./App.css";
import Navmenu from "./components/Navmenu";
import Content from "./components/Content";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <Router>
      <div>
        <Navmenu />
        <Content />
        {/* <Switch>
          <Route>

          </Route>
        </Switch> */}
      </div>
    // </Router>
  );
}

export default App;
