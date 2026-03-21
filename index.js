const prompt = require("prompt-sync")()

let nomeHeroi = prompt("Digite o nome do Herói: ")
let experienciaXp = prompt("Digite o XP do seu Herói: ")

if (experienciaXp <= 1000){
    console.log("Nível: Ferro")
}else if (experienciaXp <= 2000){
    console.log("Nível: Bronze")
}else if (experienciaXp <= 5000){
    console.log("Nível: Prata")
}else if (experienciaXp <= 7000){
    console.log("Nível: Ouro")
}else if (experienciaXp <= 8000){
    console.log("Nível: Platina")
}else if (experienciaXp <= 9000){
    console.log("Nível: Ascendente")
}else if (experienciaXp <= 10000){
    console.log("Nível: Imortal")
}else{
    console.log("Nível: Radiante")
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + experienciaXp)