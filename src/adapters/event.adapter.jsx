export const createEventAdapter = (event, language) => ({
  id: event.id,
  title:
    typeof event?.title === "string"
      ? JSON.parse(event?.title)?.[language]
      : event?.title[language],
  shortDescription:
    typeof event?.shortDescription === "string"
      ? JSON.parse(event?.shortDescription)?.[language]
      : event?.shortDescription[language],
  longDescription:
    typeof event?.longDescription === "string"
      ? JSON.parse(event?.longDescription)?.[language]
      : event?.longDescription[language],
  isPresential:
    typeof event?.mode === "string"
      ? JSON.parse(event?.mode)?.[language]?.isPresential
      : event?.mode?.[language]?.isPresential,
  location:
    typeof event?.mode === "string"
      ? JSON.parse(event?.mode)?.[language]?.location
      : event?.mode?.[language]?.location,
  startDate: event?.startDate,
  endDate: event?.endDate,
  startTime: event?.startTime,
  endTime: event?.endTime,
  max_participants: event?.max_participants,
  image: event?.image,
});
