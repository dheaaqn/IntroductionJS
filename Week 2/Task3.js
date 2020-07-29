checkNum = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir) {
        const showArray = dataArray.filter((arr) => arr >= nilaiAwal && arr <= nilaiAkhir)
        if (showArray.length > 0) {
            showArray.sort((a, b) => {
                return a - b
            })
            console.log(showArray)
        } else {
            console.log('Jumlah angka dalam data array tidak ada')
        }
    } else {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    }
}

checkNum(3, 50, [1, 2, 23, 45, 5, 6])