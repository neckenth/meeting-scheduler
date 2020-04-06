import React from "react";

const MeetingForm = (props) => {
  const { attendees, rooms, handleSubmitForm } = props;

  const [meetingName, setMeetingName] = React.useState("");
  const [inPerson, setInPerson] = React.useState(false);
  const [meetingRoom, setMeetingRoom] = React.useState("Online");
  const [meetingDate, setMeetingDate] = React.useState("");
  const [meetingAttendees, setMeetingAttendees] = React.useState([]);
  const [selectedAttendee, setSelectedAttendee] = React.useState("");

  return (
    <div className="newMeetingForm">
      <div>
        <form>
          <div>
            <label for="name">Meeting Name</label>
            <input
              onChange={(e) => setMeetingName(e.target.value)}
              id="name"
              value={meetingName}
            />
          </div>
          <div>
            <label for="date">Meeting Date</label>
            <input
              id="date"
              type="date"
              onChange={(e) => setMeetingDate(e.target.value)}
              value={meetingDate}
            />
          </div>
          <div>
            <label for="attendees">Attendees</label>
            <select
              onChange={(e) =>
                e.target.value && setSelectedAttendee(e.target.value)
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
                setMeetingAttendees([...meetingAttendees, selectedAttendee]);
                setSelectedAttendee("");
              }}
            >
              Add Attendee
            </button>
          </div>
          <div>
            <label for="inPerson">In Person?</label>
            <input
              type="checkbox"
              onChange={() => setInPerson(!inPerson)}
              id="inPerson"
              value={inPerson}
            />
          </div>
          {inPerson && (
            <div>
              <label for="room">Meeting Room</label>
              <select
                onChange={(e) =>
                  e.target.value && setMeetingRoom(e.target.value)
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
              !(
                meetingRoom &&
                meetingName &&
                meetingAttendees.length &&
                meetingDate
              )
            }
            onClick={(e) => {
              e.preventDefault();
              handleSubmitForm({
                name: meetingName,
                room: inPerson ? meetingRoom : "Online",
                attendees: meetingAttendees,
                date: meetingDate,
              });
              setMeetingName("");
              setMeetingRoom("");
              setMeetingDate("");
              setMeetingAttendees([]);
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

export default MeetingForm;
