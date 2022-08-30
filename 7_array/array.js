var num = [4, 5, 6, 7, 8, 3, 2, "san ", "dro"]
for (var c = 0; c < num.length; c++) {
    console.log(`Posição ${c}: ${num[c]}`)
}
for (c in num) {
    console.log(num[c])
}