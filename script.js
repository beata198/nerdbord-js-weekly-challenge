const hr = document.querySelector(".arrow__hours");
const m = document.querySelector(".arrow__minutes");
const s = document.querySelector(".circle__three");

setInterval(() => {
  const time = new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const sec = time.getSeconds();

  const hoursRotation = 30 * hours + minutes / 2;
  const minutesRotation = 6 * minutes;
  const secRotation = 6 * sec;

  hr.style.transform = `rotate(${hoursRotation}deg)`;
  m.style.transform = `rotate(${minutesRotation}deg)`;
  // s.style.transform +=  `rotate(${secRotation}deg)`
  // );
}, 1000);
