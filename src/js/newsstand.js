function init() {
  const refreshButton = document.querySelector(".refresh-btn");

  const daysOfWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const date = new Date();
  const dayName = daysOfWeek[date.getDay()];
  document.querySelector(
    ".date"
  ).innerHTML = `${date.toLocaleDateString()} ${dayName}`;

  refreshButton.addEventListener("click", function () {
    location.reload();
  });
}

export default init;