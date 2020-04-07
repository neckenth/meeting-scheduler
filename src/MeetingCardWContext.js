import React from "react";
import { PreferredColorContext, DateContext } from "./context";

const MeetingCardWContext = (props) => {
  const { name, attendees, room, date } = props;
  const colors = React.useContext(PreferredColorContext);
  const todayDate = React.useContext(DateContext);

  return (
    <div
      className="meetingCard"
      style={{
        backgroundColor: attendees.includes("Nancy") ? colors.red : null,
        fontStyle: new Date(date) < todayDate ? "italic" : null,
      }}
    >
      <h5>{name}</h5>
      <div>Attendees: {attendees.join(", ")}</div>
      <div>Room: {room}</div>
      <div>Date: {date}</div>
    </div>
  );
};

export default MeetingCardWContext;
