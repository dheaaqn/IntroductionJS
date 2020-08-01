const reverseWord = (text) => {
    let result = []
    let toArray = text.split(" ")

    for (let x = (toArray.length) - 1; x >= 0; x--) {
        result.push(toArray[x])
    }

    console.log(result.join(" "))
}

reverseWord('hai halo hai')