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
  "Manan",
  "Lena",
  "Jeremy",
  "Chris",
  "Evan",
  "Steve",
  "Damien",
];

const roomNames = ["Town Hall", "This Room", "That Room"];

export const schedulerState = {
  meetings: existingMeetings,
  attendees: attendeeNames,
  rooms: roomNames,
  addNewMeeting: false,
};

export const formState = {
  meetingName: "",
  inPerson: false,
  meetingRoom: "",
  meetingDate: "",
  meetingAttendees: [],
  selectedAttendee: "",
};

export const schedulerReducer = (state, action) => {
  switch (action.type) {
    case "toggleMeetingForm":
      return { ...state, addNewMeeting: !state.addNewMeeting };
    case "submitForm":
      return {
        ...state,
        meetings: [...state.meetings, action.payload],
        addNewMeeting: !state.addNewMeeting,
      };
    default:
      return state;
  }
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "enterMeetingName":
      return { ...state, meetingName: action.payload };
    case "toggleInPerson":
      return { ...state, inPerson: !state.inPerson };
    case "enterMeetingRoom":
      return { ...state, meetingRoom: action.payload };
    case "enterMeetingDate":
      return { ...state, meetingDate: action.payload };
    case "selectAttendee":
      return { ...state, selectedAttendee: action.payload };
    case "addMeetingAttendees":
      return {
        ...state,
        meetingAttendees: [...state.meetingAttendees, state.selectedAttendee],
        selectAttendee: "",
      };
    case "submitForm":
      return {
        ...state,
        meetingName: "",
        inPerson: false,
        meetingRoom: "",
        meeetingDate: "",
      };
    default: {
      return state;
    }
  }
};
