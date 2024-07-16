let frutasVerano = new Set(["Melón", "Sandía", "Higo", "Nectarina", "Naranja"]);
let frutasInvierno = new Set(["Fresa", "Naranja", "Limón", "Mandarina"]);
let frutasAnuales = frutasVerano.intersection(frutasInvierno);
console.log(frutasAnuales);