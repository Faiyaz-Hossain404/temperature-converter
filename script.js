const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function computeTemp(e) {
  const currentEvent = e.target.value;

  switch (currentEvent) {
    case "celsius":
      fahrenheit.value = currentEvent * 1.8 + 32;
      kelvin.value = currentEvent * 273.15;
      break;

    case "fahrenheit":
      celsius.value = (currentEvent - 32) * 1.8;
  }
}

// K = °C + 273.15
// °F = (°C × 1.8) + 32
// C=(F−32)×1.8​
