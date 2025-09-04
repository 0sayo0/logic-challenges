import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export async function readContacts() {
  const data = await rl.question("Introduce los datos del contacto");
}
