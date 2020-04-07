import React from "react";
import MeetingCardWContext from "./MeetingCardWContext";
import MeetingFormWReducer from "./MeetingFormWReducer";
import { schedulerState, schedulerReducer } from "./reducers";

const MeetingsWReducerWContext = () => {
  const [state, dispatch] = React.useReducer(schedulerReducer, schedulerState);

  const { meetings, attendees, rooms, addNewMeeting } = state;

  return (
    <div>
      <h2>Meeting Scheduler</h2>
      <h4>Existing Meetings</h4>
      <div className="meetingsList">
        {meetings.map((elem, i) => (
          <MeetingCardWContext
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
          handleSubmitForm={(values) =>
            dispatch({
              type: "addMeeting",
              payload: { ...values },
            })
          }
        />
      )}
    </div>
  );
};

export default MeetingsWReducerWContext;
