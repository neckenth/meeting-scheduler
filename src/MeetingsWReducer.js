import React from "react";
import MeetingCard from "./MeetingCard";
import MeetingFormWReducer from "./MeetingFormWReducer";
import { schedulerState, schedulerReducer } from "./reducers";

const MeetingsWReducer = () => {
  const [state, dispatch] = React.useReducer(schedulerReducer, schedulerState);

  const { meetings, attendees, rooms, addNewMeeting } = state;

  const handleSubmitForm = (values) => {
    dispatch({ type: "submitForm", payload: { ...values } });
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
        onClick={() => dispatch({ type: "toggleMeetingForm" })}
      >
        New Meeting
      </button>
      {addNewMeeting && (
        <MeetingFormWReducer
          attendees={attendees}
          rooms={rooms}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default MeetingsWReducer;
