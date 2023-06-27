
export const createEventAdapter = (event,language) => ({
  id: event.id,
  title: JSON.parse(event?.title)?.[language],
  shortDescription: JSON.parse(event?.shortDescription)?.[language],
  longDescription: JSON.parse(event?.longDescription)?.[language],
  isPresential: JSON.parse(event?.mode)?.[language]?.isPresential,
  location: JSON.parse(event?.mode)?.[language]?.location,
  startDate: event?.startDate,
  endDate: event?.endDate,
  startTime: event?.startTime,
  endTime: event?.endTime,
  max_participants: event?.max_participants,
  image: event?.image,
});
