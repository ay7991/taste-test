import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import '../static/styles.scss';

import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";

const App = (): React.JSX.Element => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginContainer />}></Route>
          <Route path="/signup" element={<SignupContainer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;