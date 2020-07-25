let mtk = 98
let bahasaIndonesia = 35
let bahasaInggris = 38
let ipa = 90
let average

if (typeof mtk, ipa, bahasaIndonesia, bahasaInggris !== 'undefined') {
    average = (mtk + ipa + bahasaIndonesia + bahasaInggris) / 4
} else {
    console.log('kosong tu')
}

console.log('Rata-rata: ' + average)

if (average >= 90 && average <= 100) {
    console.log('Grade A')
} else if (average >= 80 && average <= 89) {
    console.log('Grade B')
} else if (average >= 70 && average <= 79) {
    console.log(' Grade C')
} else if (average >= 60 && average <= 69) {
    console.log('Grade D')
} else {
    console.log('Grade E')
}