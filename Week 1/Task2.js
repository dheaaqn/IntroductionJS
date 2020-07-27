let mtk = 90
let ipa = 90
let bahasaIndonesia = 70
let bahasaInggris

if (mtk && ipa && bahasaIndonesia && bahasaInggris) {
    let average = (mtk + ipa + bahasaIndonesia + bahasaInggris) / 4;
    console.log('Rata-rata ' + average)
    if (average >= 90 && average <= 100) {
        console.log('Grade A')
    } else if (average >= 80 && average <= 89) {
        console.log('Grade B')
    } else if (average >= 70 && average <= 79) {
        console.log('Grade C')
    } else if (average >= 60 && average <= 69) {
        console.log('Grade D')
    } else {
        console.log('Grade E')
    }
} else {
    console.log('ada yg kosong')
}