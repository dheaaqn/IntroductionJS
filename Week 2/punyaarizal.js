function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir) {
        if (dataArray > 5) {
            let filteredNumbers = dataArray.filter((number) => number > nilaiAwal && number < nilaiAkhir).sort((a, b) => a - b)
            if (filteredNumbers) {
                console.log(filteredNumbers)
            } else {
                console.log("Jumlah angka dalam array tidak ada")
            }
        } else {
            console.log("data array kurang dari 5")
        }
    } else {
        console.log("Nilai Akhir harus lebih besar dari nilai awal")
    }
}

seleksiNilai(2, 10, [1, 34, 54, 23, 7, 8, 5])