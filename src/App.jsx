import { Route, Routes } from "react-router-dom";
import { Header } from "./templates/Header";
import { Site } from "./templates/Site";
import { Preferences } from "./templates/Preferences";

function App() {
  return (
    <div className="app container">
      <div className="header">
        <Header />
      </div>
      <div className="main px-3">
        <Routes>
          <Route path="/" element={<Site />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
