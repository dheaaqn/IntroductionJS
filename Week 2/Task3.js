checkNum = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else if (dataArray.length < 5) {
        console.log('Data array kurang dari 5')
    } else {
        const showArray = dataArray.filter((arr) => arr >= nilaiAwal && arr <= nilaiAkhir)
        if (showArray.length > 0) {
            showArray.sort((a, b) => {
                return a - b
            })
            console.log(showArray)
        } else {
            console.log('Jumlah angka dalam data array tidak ada')
        }
    }
}

checkNum(3, 20, [1, 2, 23])