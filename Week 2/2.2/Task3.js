const url = 'https://jsonplaceholder.typicode.com/users'

const getName = () => {
    fetch(url)
        .then((res) => {
            return res.json() // transform data into json
        })
        .then((show) => {
            show.map((item) => {
                console.log(item.name)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

getName()