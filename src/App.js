import React from "react";
import Imessage from "./components/Imessage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


library.add(fab, fas, far);

function App() {
  return (
    <div className="App">
      {/* Create a single component that holds everything */}
      <Imessage />
    </div>
  );
}

export default App;
