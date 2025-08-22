// Password Validator (versión con reporte)
const raw = prompt("Ingresa una contraseña:"); // puede ser null
const pwd = String(raw ?? ""); // normaliza
const hasSpace = /\s/.test(pwd); // espacios no permitidos

const rules = [
  { ok: pwd.length >= 8, msg: "Debe tener al menos 8 caracteres." },
  { ok: /[A-Z]/.test(pwd), msg: "Debe incluir al menos una mayúscula." },
  { ok: /[a-z]/.test(pwd), msg: "Debe incluir al menos una minúscula." },
  { ok: /\d/.test(pwd), msg: "Debe incluir al menos un número." },
  {
    ok: /[!@#$%^&*+]/.test(pwd),
    msg: "Debe incluir al menos un carácter especial (!@#$%^&*).",
  },
  { ok: !hasSpace, msg: "No debe contener espacios en blanco." },
];

const errores = rules.filter((r) => !r.ok).map((r) => r.msg);

if (errores.length === 0) {
  console.log("Contraseña válida. ¡Bienvenido!");
} else {
  console.log("Contraseña inválida:");
  errores.forEach((e) => console.log("- " + e));
}
