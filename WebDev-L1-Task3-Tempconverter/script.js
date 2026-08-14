const form = document.getElementById("converterForm");

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");

const message = document.getElementById("message");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  // Clear previous message
  message.textContent = "";
  message.classList.remove("show");

  // Check for empty or invalid input
  if (temperatureInput.value.trim() === "" || isNaN(temperature)) {
    showError("Please enter a valid number.");

    results.classList.add("hidden");

    return;
  }

  // Check absolute zero
  if (unit === "celsius" && temperature < -273.15) {
    showError("Temperature cannot be below absolute zero (−273.15°C).");

    results.classList.add("hidden");

    return;
  }

  if (unit === "fahrenheit" && temperature < -459.67) {
    showError("Temperature cannot be below absolute zero (−459.67°F).");

    results.classList.add("hidden");

    return;
  }

  if (unit === "kelvin" && temperature < 0) {
    showError("Temperature cannot be below absolute zero (0 K).");

    results.classList.add("hidden");

    return;
  }

  let celsius;
  let fahrenheit;
  let kelvin;

  // Convert based on selected unit

  if (unit === "celsius") {
    celsius = temperature;
    fahrenheit = (temperature * 9) / 5 + 32;
    kelvin = temperature + 273.15;
  } else if (unit === "fahrenheit") {
    fahrenheit = temperature;
    celsius = ((temperature - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    kelvin = temperature;
    celsius = temperature - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  // Display results

  celsiusResult.textContent = formatNumber(celsius);
  fahrenheitResult.textContent = formatNumber(fahrenheit);
  kelvinResult.textContent = formatNumber(kelvin);

  // Show result section

  results.classList.remove("hidden");
});

function formatNumber(number) {
  return number.toFixed(2);
}

function showError(text) {
  message.textContent = text;
  message.classList.add("show");
}

// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.textContent = "☀";
}

// Toggle theme

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    themeIcon.textContent = "☀";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.textContent = "☾";
    localStorage.setItem("theme", "light");
  }
});
