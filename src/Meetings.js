import React from "react";
import MeetingCard from "./MeetingCard";
import MeetingForm from "./MeetingForm";

const Meetings = () => {
  const existingMeetings = [
    {
      name: "First Meeting",
      attendees: ["Nancy", "Tim", "Anthony"],
      room: "This Room",
      date: new Date().toLocaleDateString(),
    },
  ];
  const attendeeNames = [
    "Tim",
    "Anthony",
    "Nancy",
    "Manan",
    "Lena",
    "Jeremy",
    "Chris",
    "Evan",
    "Steve",
    "Damien",
  ];

  const roomNames = ["Town Hall", "This Room", "That Room"];

  const [meetings, setMeetings] = React.useState(existingMeetings);
  const [addNewMeeting, setAddNewMeeting] = React.useState(false);
  const [attendees] = React.useState(attendeeNames);
  const [rooms] = React.useState(roomNames);

  const handleSubmitForm = (values) => {
    setMeetings([...meetings, { ...values }]);
    setAddNewMeeting(false);
  };

  return (
    <div>
      <h2>Meeting Scheduler</h2>
      <h4>Existing Meetings</h4>
      <div className="meetingsList">
        {meetings.map((elem, i) => (
          <MeetingCard
            key={i}
            name={elem.name}
            attendees={elem.attendees}
            room={elem.room}
            date={elem.date}
          />
        ))}
      </div>
      <button
        className="newMeeting"
        onClick={() => setAddNewMeeting(!addNewMeeting)}
      >
        New Meeting
      </button>
      {addNewMeeting && (
        <MeetingForm
          attendees={attendees}
          rooms={rooms}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Meetings;
