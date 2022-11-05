function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img
          src="./assets/icon-${player2}.svg"
          alt="Bandeira de ${player2}"
        />
    </li>
  `
}

let delay = -0.5
function createCard(date, day, game) {
  delay = delay + 0.5
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${game}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "11/11",
    "sabado",
    createGame("brazil", "16:00", "cameroon") +
      createGame("brazil", "16:00", "cameroon")
  ) +
  createCard(
    "12/12",
    "segunda",
    createGame("brazil", "16:00", "cameroon") +
      createGame("brazil", "16:00", "cameroon")
  ) +
  createCard(
    "12/12",
    "segunda",
    createGame("brazil", "16:00", "cameroon") +
      createGame("brazil", "16:00", "cameroon")
  )
