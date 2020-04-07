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
    case "addMeeting":
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
    case "enterFormData": {
      return { ...state, ...action.payload };
    }
    case "toggleInPerson":
      return { ...state, inPerson: !state.inPerson };
    case "selectAttendee":
      return { ...state, selectedAttendee: action.payload };
    case "addMeetingAttendees":
      return {
        ...state,
        meetingAttendees: [...state.meetingAttendees, state.selectedAttendee],
        selectAttendee: "",
      };
    case "resetForm":
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
