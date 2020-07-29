let janjian = new Promise((resolve, reject) => {
    let success = true
    let data = ['jam', 'tempat']
    if (success) {
        resolve(data)
    } else {
        reject(new Error('data tidak ditemukan'))
    }

})

janjian
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })