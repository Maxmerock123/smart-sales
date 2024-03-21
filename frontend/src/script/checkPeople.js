export function checkPeople(eventName, people) {
  if (eventName == "insideWedding") {
    if (people < 100) {
      return false;
    } else {
      return true;
    }
  }
}
