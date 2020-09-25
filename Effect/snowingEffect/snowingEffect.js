setInterval(createSnowflake, 100);

function createSnowflake() {
  const snowFlake = document.createElement("i");
  snowFlake.classList.add("far");
  snowFlake.classList.add("fa-snowflake");

  snowFlake.style.left = Math.random() * window.innerWidth + "px";
  snowFlake.style.animationDuration = Math.random() * 2 + 3 + "s";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}
