// Temperature Converter

const data = prompt("Enter a temperature in degrees Celsius: ");

const celsiusData = parseFloat(data);

if (isNaN(celsiusData)) {
  console.log("Enter a number");
} else {
  const toFahrenheit = (celsiusData * 9) / 5 + 32;
  const toKelvin = celsiusData + 273.15;

  console.log(`The value entered is: ${celsiusData} C°`);

  console.log(`The Fahreheit degrees are: ${toFahrenheit.toFixed(2)} F°`);
  console.log(`The Kelvin degrees are: ${toKelvin.toFixed(2)} K°`);
}
