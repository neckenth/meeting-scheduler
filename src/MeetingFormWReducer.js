import React from "react";
import { formState, formReducer } from "./reducers";

const MeetingFormWReducer = (props) => {
  const { attendees, rooms, handleSubmitForm } = props;

  const [state, dispatch] = React.useReducer(formReducer, formState);

  const {
    meetingName,
    meetingDate,
    meetingAttendees,
    meetingRoom,
    inPerson,
  } = state;

  return (
    <div className="newMeetingForm">
      <div>
        <form>
          <div>
            <label for="name">Meeting Name</label>
            <input
              onChange={(e) =>
                dispatch({
                  type: "enterFormData",
                  payload: { meetingName: e.target.value },
                })
              }
              id="name"
              value={meetingName}
            />
          </div>
          <div>
            <label for="date">Meeting Date</label>
            <input
              id="date"
              type="date"
              onChange={(e) =>
                dispatch({
                  type: "enterFormData",
                  payload: { meetingDate: e.target.value },
                })
              }
              value={meetingDate}
            />
          </div>
          <div>
            <label for="attendees">Attendees</label>
            <select
              onChange={(e) =>
                e.target.value &&
                dispatch({
                  type: "selectAttendee",
                  payload: e.target.value,
                })
              }
              id="attendees"
            >
              <option value="">Add attendees</option>
              {attendees.map((elem, i) => (
                <option key={i} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
            <button
              className="formButton"
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "addMeetingAttendees" });
                dispatch({ type: "selectAttendee", payload: "" });
              }}
            >
              Add Attendee
            </button>
          </div>
          <div>
            <label for="inPerson">In Person?</label>
            <input
              type="checkbox"
              onChange={() => dispatch({ type: "toggleInPerson" })}
              id="inPerson"
              value={inPerson}
            />
          </div>
          {inPerson && (
            <div>
              <label for="room">Meeting Room</label>
              <select
                onChange={(e) =>
                  e.target.value &&
                  dispatch({
                    type: "enterFormData",
                    payload: { meetingRoom: e.target.value },
                  })
                }
                id="room"
              >
                <option value="">Select a room</option>
                {rooms.map((elem, i) => (
                  <option key={i} value={elem}>
                    {elem}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            className="formButton"
            disabled={
              !(inPerson
                ? meetingRoom &&
                  meetingName &&
                  meetingAttendees.length &&
                  meetingDate
                : meetingName && meetingDate && meetingAttendees.length)
            }
            onClick={(e) => {
              e.preventDefault();
              handleSubmitForm({
                name: meetingName,
                room: inPerson ? meetingRoom : "Online",
                attendees: meetingAttendees,
                date: meetingDate,
              });
              dispatch({ type: "submitForm" });
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        Selected Attendees:{" "}
        <ol>
          {meetingAttendees.map((elem, i) => (
            <li key={i}>{elem}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default MeetingFormWReducer;
