// CONCAT() = untuk menggabungkan dua array atau lebih menjadi satu array
const numConcat = [1, 2, 3]
const strConcat = ['hai', 'halo', 'hai']
const resultConcat = numConcat.concat(strConcat)
console.log('result concat = ' + resultConcat)

// INCLUDES() = untuk mengecek apakah sebuah elemen yang telah ditentukan terdapat pada array yang dimiliki
const numIncludes = [1, 2, 3]
const resultIncludes = numIncludes.includes(28)
console.log('result includes = ' + resultIncludes)

// SLICE() = untuk membagi elemen terpilih menjadi sebuah susunan objek baru.
const numSlice = [1, 2, 3, 4, 5]
const resultSlice = numSlice.slice(1, 4)
console.log('result slice = ' + resultSlice)

// FILTER() = untuk membuat array baru yang diisi dari nilai array lama yang memenuhi kondisi
const numFilter = [1, 2, 3, 4]
const resultFilter = numFilter.filter((num) => num >= 3)
console.log('result filter = ' + resultFilter)

// COPYWITHIN() = untuk menyalin sebuah value dari array ke posisi lain dalam array dengan menimpa value yang ada
const numCopyWithin = [1, 2, 3, 4, 5]
const resultCopyWithin = numCopyWithin.copyWithin(1, 3)
console.log('result copywithin = ' + resultCopyWithin)

// FILL() = untuk mengubah sebuah value pada array dengan posisi yang spesifik
const numFill = [1, 2, 3, 4, 5]
const resultFill = numFill.fill(28, 1, 4)
console.log('result fill = ' + resultFill)

// POP() = untuk removes elemen terakhir dari sebuah array lalu mengembalikan elemen tersebut
const numPop = [1, 2, 3, 4, 5]
const resultPop = numPop.pop()
console.log('result pop = ' + resultPop)

// SHIFT() = untuk menghapus elemen pertama dari sebuah array lalu mengembalikan elemen tersebut
const numShift = [1, 2, 3, 4, 5]
const resultShift = numShift.shift()
console.log('result shift = ' + resultShift)

// UNSHIFT() = untuk menambahkan elemen baru pada index pertama array lalu mengembalikan nilai panjang array yang baru
const numUnShift = [1, 2, 3, 4, 5]
const resultUnShift = numUnShift.unshift(10, 11)
console.log('result unshift = ' + resultUnShift)

// ENTRIES() = untuk menampilkan pasangan value array dengan keys nya
const strEntries = ['a', 'b', 'c']
const entries = strEntries.entries()
for (resultEntries of entries) {
    console.log(resultEntries)
}

// FIND() = mengembalikan nilai array yang memenuhi kondisi
const numFind = [1, 2, 3, 4, 5, 48]
const resultFind = numFind.find(num => num > 30)
console.log(resultFind)