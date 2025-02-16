export function generateTimeSlots(startTime, endTime, intervalMinutes) {
  const slots = [];
  const start = new Date(`2000-01-01T${startTime}`);
  const end = new Date(`2000-01-01T${endTime}`);

  while (start < end) {
    slots.push(
      start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    start.setMinutes(start.getMinutes() + intervalMinutes);
  }

  return slots;
}
