const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function computeTemp(e) {
  const currentEvent = e.target.value;

  switch (e.target.name) {
    case "celsius":
      fahrenheit.value = currentEvent * 1.8 + 32;
      kelvin.value = currentEvent * 273.15;
      break;

    case "fahrenheit":
      celsius.value = (currentEvent - 32) / 1.8;
      kelvin.value = (currentEvent - 32) / 1.8 + 273.15;
      break;

    case "kelvin":
      celsius.value = currentEvent - 273.15;
      fahrenheit.value = (currentEvent - 273.15) * 1.8 + 32;
      break;

    default:
      break;
  }
}

// K = °C + 273.15
// °F = (°C × 1.8) + 32

// C=(F−32)/1.8​
// K = (F - 32) / 1.8 + 273.15;

// C = K - 273.15
// F = (K - 273.15) * 1.8 + 32
