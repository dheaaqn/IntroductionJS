const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek + (' adalah hari kerja'))
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// THEN - CATCH
// .then digunakan untuk handle nilai dari resolve
// .catch digunakan untuk handle nilai dari reject
cekHariKerja('Senin')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })


// TRY - CATCH
// try digunakan untuk menguji apakah program tersebut error atau tidak
// catch digunakan untuk menangkap dan menampilkan error message bila terdapat error pada program
const showHariKerja = async (day) => {
    try {
        const show = await day
        console.log(show + ' adalah hari kerja')
    } catch (err) {
        console.log(err.message)
    }
}

showHariKerja('Selasa')