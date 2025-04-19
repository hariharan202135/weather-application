const apiKey = "acd2266aa5ee486a97f71947251904";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = "Loading...";

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&api=yes`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        resultDiv.innerHTML = `<p style="color: red;">${data.error.message}</p>`;
      } else {
        const weatherHTML = `
          <h2>${data.location.name}, ${data.location.country}</h2>
          <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
          <p><strong>Condition:</strong> ${data.current.condition.text}</p>
          <img src="${data.current.condition.icon}" alt="weather icon" />
        `;
        resultDiv.innerHTML = weatherHTML;
      }
    })
    .catch(err => {
      resultDiv.innerHTML = "<p style='color: red;'>Failed to fetch weather data.</p>";
    });
}
