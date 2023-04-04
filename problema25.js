const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
function convertirARomano(num) {
    const unidadesRomanas = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const decenasRomanas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const centenasRomanas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const unidadesDeMilRomanas = ["", "M", "MM", "MMM", "MV", "V", "VM", "VMM", "VMMM", "MX"];
  
    if (num > 4999) {
      return "Error: el número debe ser menor a 5000.";
    }
  
    const unidades = num % 10;
    const decenas = Math.floor(num / 10) % 10;
    const centenas = Math.floor(num / 100) % 10;
    const unidadesDeMil = Math.floor(num / 1000) % 10;
  
    const romano =
      unidadesDeMilRomanas[unidadesDeMil] +
      centenasRomanas[centenas] +
      decenasRomanas[decenas] +
      unidadesRomanas[unidades];
  
    return romano;
  }

rl.question("Introduzca un número menor a 5000: ", (args) => {
    args = parseInt(args);
    rl.close()
    console.log(convertirARomano(args));
});
