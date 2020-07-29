const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda',
    'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith',
    'Olivia', 'Penelope'
]

function searchName(keyword, limit, callback) {
    const filterName = name.filter((index) => {
        return index.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    })
    if (filterName != 0) {
        callback(filterName, limit)
    } else {
        console.log("Data tidak ditemukan")
    }

}

const showName = (keyword, limit) => {
    let show = keyword.slice(0, limit)
    console.log(show)
}

searchName('ang', 3, showName)