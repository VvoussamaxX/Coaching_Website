const availabilities = {
  Oussama: ["Monday Tuesday Wednesday Thursday Friday Saturday Sunday (9am to 21pm)"],
  Ilias: ["Monday Tuesday Wednesday Thursday Friday Sunday (9am to 21pm)"],
  Rayane: ["Monday Tuesday Wednesday Thursday Friday (9am to 16pm)"],
  Ashley: ["Monday Tuesday Wednesday Thursday Friday Sunday (9am to 23pm)"],
  Dan: ["Monday Tuesday Wednesday Thursday Friday Saturday Sunday (9am to 21pm)"],
  Laura: ["Tuesday Sunday (9am to 14pm)"],
};

function populateOptions(selectElement, options) {
  selectElement.innerHTML = "";
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    selectElement.appendChild(optionElement);
  });
}

function populateDayOptions() {
  const coachSelect = document.getElementById("coach");
  const daySelect = document.getElementById("day");
  const selectedCoach = coachSelect.value;
  const coachAvailability = availabilities[selectedCoach][0]; 

  const days = coachAvailability.match(/(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/g);

  populateOptions(daySelect, days);

  populateTimeOptions();
}

function populateTimeOptions() {
  const coachSelect = document.getElementById("coach");
  const daySelect = document.getElementById("day");
  const timeSelect = document.getElementById("time");
  const selectedCoach = coachSelect.value;
  const selectedDay = daySelect.value;
  const coachAvailability = availabilities[selectedCoach][0]; 

  const timeRange = coachAvailability.match(/(\d+am|\d+pm)/g);

  const startTime = convertTo24Hour(timeRange[0]);
  const endTime = convertTo24Hour(timeRange[1]);
  const timeSlots = generateTimeSlots(startTime, endTime);

  populateOptions(timeSelect, timeSlots);
}

function convertTo24Hour(time) {
  const [hour, period] = time.split(/am|pm/);
  const hour24 = period.toLowerCase() === "pm" ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
  return hour24.toString().padStart(2, "0") + ":00";
}

function generateTimeSlots(startTime, endTime) {
  const timeSlots = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    timeSlots.push(currentTime);
    currentTime = incrementTimeByOneHour(currentTime);
  }

  return timeSlots;
}

function incrementTimeByOneHour(time) {
  const [hour, minutes] = time.split(":");
  let newHour = parseInt(hour, 10) + 1;
  let newTime = newHour.toString().padStart(2, "0") + ":" + minutes;

  if (newHour === 24) {
    newHour = "00";
    newTime = newHour + ":" + minutes;
  }

  return newTime;
}

const coachSelect = document.getElementById("coach");
const daySelect = document.getElementById("day");
coachSelect.addEventListener("change", populateDayOptions);
daySelect.addEventListener("change", populateTimeOptions);

populateDayOptions();
