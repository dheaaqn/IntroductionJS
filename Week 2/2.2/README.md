# Task 1
### buatlah sambungan program menggunakan then-catch dan try-catch untuk mengecek hari kerja dari kode Asynchronous di bawah dan jelaskan penggunaan then-catch dan try-catch dengan memberikan komentar di bawahnya.
```
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
```

# Task 2
### buatlah program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
```
const getMonths = (callback) => {
    setTimeout(() => {
        let error = false
        let months = [
            'Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus',
            'September', 'Oktober', 'November', 'Desember'
        ]

        if (!error) {
            callback(null, months)
        } else {
            callback(new Error('Data not found'))
        }
    }, 4000)
}
```
contoh
```
getMonth(showMonth)
```

# Task 3
### buatlah program menggunakan method fetch untuk menampilkan semua name dari [REST API](https://jsonplaceholder.typicode.com/users) tersebut. Gunakan debugger console bawaan chrome untuk melihat hasilnya
