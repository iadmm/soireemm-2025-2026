function dateMachine(date) {
  let jsDate = new Date(Date.parse(date));
  return jsDate.toISOString().split("T")[0];
}

function dateNumeric(date) {
  let jsDate = new Date(date);
  const year = jsDate.toLocaleString("fr", { year: "numeric" });
  const month = jsDate.toLocaleString("fr", { month: "2-digit" });
  const day = jsDate.toLocaleString("fr", { day: "2-digit" });
  return `${day}.${month}.${year}`;
}

function dateFull(date) {
  let jsDate = new Date(date);
  return jsDate.toLocaleString("fr", { dateStyle: "long" });
}

export { dateMachine, dateNumeric, dateFull };
