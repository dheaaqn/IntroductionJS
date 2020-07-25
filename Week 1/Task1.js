let biodata = {
    name: 'Dhea',
    age: '17',
    hobbies: ['baca novel', 'main game', 'sedikit berkebun'],
    isMarried: false,
    schoolList: [{
            name: 'SMP Salafiyah Pekalongan',
            yearIn: 'lupa',
            yearOut: '2017 kalo ga salah',
            major: null
        },
        {
            name: 'SMK Telkom Purwokerto',
            yearIn: 2017,
            yearOut: 2020,
            major: 'Rekayasa Perangkat Lunak'
        }
    ],
    skills: [{
        skillName: 'reactnative',
        level: 'beginner'
    }],
    interestInCoding: true
}

console.log(biodata.schoolList[0])