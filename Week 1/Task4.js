let data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
    },
    phone: '+1-770-736-8031 x56442',
    website: 'hildegard.org'
}

let newData = {
    name: 'Dhea Qonita Irawan',
    email: 'dheaaqn@gmail.com',
    hobbies: {
        indoor: 'baca novel',
        outdoor: 'berkebun sdikit'
    }
}

let mergedData = {
    ...data,
    ...newData
}

const {
    street,
    city
} = data.address

console.log(city)