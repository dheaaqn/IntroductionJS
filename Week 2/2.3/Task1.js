const checkPalindrome = (text) => {
    if (typeof text != 'string') {
        console.log('Data yang diinput bukan string')
    } else {
        let str = text.toLowerCase()
        let result = ''
        for (let x = (str.length) - 1; x >= 0; x--) {
            result += str[x]
        }

        if (result == text) {
            console.log(`${result} adalah palindrome`)
        } else {
            console.log(`${result} bukan palindrome`)
        }
    }
}

checkPalindrome('malam')