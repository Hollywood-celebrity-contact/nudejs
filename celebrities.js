
document.addEventListener("DOMContentLoaded", () => {
  fetch("celebrities.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("celebrity-list");
      data.forEach(celeb => {
        const card = document.createElement("div");
        card.className = "celebrity-card";
        card.innerHTML = `
          <h3>${celeb.name}</h3>
          <p>Profession: ${celeb.profession}</p>
          <p>Prize: ${celeb.prize}</p>
          <p>Starting at: EUR ${celeb.price}</p>
          <a href="booking.html?celeb=${encodeURIComponent(celeb.name)}">Book Now</a>
        `;
        container.appendChild(card);
      });
    });
});
