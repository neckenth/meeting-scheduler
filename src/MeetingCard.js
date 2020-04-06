import React from "react";

const MeetingCard = (props) => {
  const { name, attendees, room, date } = props;

  return (
    <div className="meetingCard">
      <h5>{name}</h5>
      <div>Attendees: {attendees.join(", ")}</div>
      <div>Room: {room}</div>
      <div>Date: {date}</div>
    </div>
  );
};

export default MeetingCard;
