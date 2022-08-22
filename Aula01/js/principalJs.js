let nome = "Henrique Vassiliou";
let idade = 16;
console.log(nome, idade);
$("<p>", {
    text: `Olá ${nome}, você possui ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Henrique Vassiliou" && idade == 16) {
        return true;
    }
    else {
        return false;
    }
}
function somar(numA, numB) {
    return numA + numB;
}
console.log("A soma deu", somar(1, 5));
