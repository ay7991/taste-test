import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";

const App = (): React.JSX.Element => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginContainer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;