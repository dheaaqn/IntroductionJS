let printSegitiga = 5

for (let i = printSegitiga; i >= 1; i--) {
    let result = ''
    for (let j = 1; j <= i; j++) {
        result += j
    }
    console.log(result)
}