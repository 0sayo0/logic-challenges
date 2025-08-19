// Tip Calculator

const readline = require("readline"); // Se extrae el modulo "readline"

// Se crea la interface para enlazar entrada y salida para los prompts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preguntar monto de la cuenta
rl.question("Ingresa el total de la cuenta: ", (cuentaInput) => {
  // rl.question(pregunta, callback): muestra el texto y espera asíncronamente a que el usuario presione Enter.
  const cuenta = parseFloat(cuentaInput); // Se guarda el dato convertido a float

  rl.question("Ingresa el porcentaje de propina: ", (propinaInput) => {
    // Segundo prompt anidado dentro del primer callback. Garantiza que se pida el porcentaje después de leer y convertir cuenta.

    // Se hace el mismo proceso para el porcentage de propina
    const porcentajePropina = parseFloat(propinaInput);

    // Se hacen validaciones
    if (
      isNaN(cuenta) ||
      isNaN(porcentajePropina) ||
      cuenta < 0 ||
      porcentajePropina < 0
    ) {
      console.log("Los valores deben ser números positivos.");
    } else {
      // Si la validacion es exitosa se hacen los calculos respectivos
      const propina = (cuenta * porcentajePropina) / 100;
      const total = cuenta + propina;

      // Se muestran los datos finales
      console.log(`La propina es: ${propina.toFixed(2)}`);
      console.log(`El total a pagar es: ${total.toFixed(2)}`);
    }

    // Cierre de la interfaz. Libera stdin/stdout de la interfaz.
    // Si no cierras, el proceso puede quedar esperando más entrada.
    rl.close();
  });
});
