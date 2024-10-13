import { useState } from 'react';
import './App.css';

import FirstAid from "./Components/FirstAid/FirstAid";

function App() {

  const [route,setRoute] = useState("");

  //Function to change Route
  const changeRoute = (page) => {
    setRoute(page);
  }

  return (
    <div className="App">
      {route === "" && (
        <div>
          <h1>ABCD</h1>
          <button onClick={() => changeRoute("firstAid")}>First Aid</button>
        </div>
      )}
      {route === "firstAid" && <FirstAid changeRoute={changeRoute} />}
    </div>
  );
}

export default App;
