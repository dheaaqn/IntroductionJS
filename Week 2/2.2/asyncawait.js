// async function check() { //ngubah function jd synchronous
//     let result = await doAsync()
//     let show = await showAsync(result)
// }

// doAsync = () => {
//     return 'hai'
// }

// showAsync = (result) => {
//     console.log(result)
// }

// check()

data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 1000)
    setTimeout(() => {
        reject(new Error('rejected'))
    }, 2000)
})

async function sum(a, b) {
    let result = 0
    result = await data
    try {
        result = await data
        let show = a + b + result
        console.log(show)
    } catch (err) {
        console.log(err)
    }
}

sum(12, 11)