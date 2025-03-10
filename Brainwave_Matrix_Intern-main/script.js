function saveTasks() {
  const selectedDate = document.getElementById('planner-date').value;

  // Check if date is selected
  if (!selectedDate) {
    alert('Please select a date.');
    return;
  }

  const activities = {};

  // Loop through all time slots and save the activities
  const timeSlots = ['12am', '1am', '2am']; // Add more time slots as needed
  timeSlots.forEach(time => {
    const activityInput = document.getElementById(`activity-${time}`);
    if (activityInput) {
      activities[time] = activityInput.value;
    }
  });

  // Store the selected date and activities in localStorage
  localStorage.setItem(selectedDate, JSON.stringify(activities));

  alert('Activities saved!');
}
