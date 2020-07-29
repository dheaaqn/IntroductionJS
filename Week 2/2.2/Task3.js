const url = 'https://jsonplaceholder.typicode.com/users'

const getName = () => {
    fetch(url)
        .then((res) => {
            return res.text()
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