enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log("п'яте завдання");

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Sunday));
console.log(DayOfWeek);
