import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/home" elememt={<Home />} />
    </Routes>
  );
};

export default App;
