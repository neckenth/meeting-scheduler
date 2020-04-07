import React from "react";
import "./App.css";
import Meetings from "./Meetings";
import MeetingsWReducer from "./MeetingsWReducer";
import MeetingsWReducerWContext from "./MeetingsWReducerWContext";
import { colors, PreferredColorContext, DateContext } from "./context";

function App() {
  return (
    <DateContext.Provider value={new Date()}>
      <PreferredColorContext.Provider value={colors}>
        <div className="App">
          <Meetings />
          {/* <MeetingsWReducer /> */}
          {/* <MeetingsWReducerWContext /> */}
        </div>
      </PreferredColorContext.Provider>
    </DateContext.Provider>
  );
}

export default App;
