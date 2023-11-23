let num = [6, 8, 4, 1, 9]
num[5]= 5
num.push(7)
num.sort()

console.log (`Nosso vetor é o ${num} .`)
console.log (`Nosso vetor tem ${num.length} espaços.`)
let pos = num.indexOf(6)
if (pos== -1) {
    console.log(`O valor não foi encotrado`)
} else {
console.log(`O valor 8 está na posição ${pos}`)
}