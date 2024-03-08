import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../static/styles.scss';

import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import HomeContainer from "../containers/HomeContainer";

const App = (): React.JSX.Element => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginContainer />}></Route>
          <Route path="/signup" element={<SignupContainer />}></Route>
          <Route path="/home" element={<HomeContainer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;