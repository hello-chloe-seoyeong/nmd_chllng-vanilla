function tictok() {
  const clock = document.querySelector('#clock');

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `
    <div class="clock-time">
      <strong>${hours}</strong><span> : </span><strong>${minutes}</strong><span> : </span><strong>${seconds}</strong>
    </div>
    <div class="clock-date">
      <span>${year}</span> - <span>${month}</span> - <span>${day}</span>
    </div>
  `;
}

tictok();
setInterval(tictok, 1000);