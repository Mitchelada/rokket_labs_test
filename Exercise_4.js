const rokket = (contactBook) => {
    var lastName = []
    contactBook.map((contact) => {
        lastName.push(contact.lastName)
    })
    return lastName
}

const contacts = [{
        firsName: 'Juanito',
        lastName: 'Rokket'
    },
    {
        firstName: 'James',
        lastName: 'Bond'
    },
    {
        firstName: 'Harry',
        lastName: 'Potter'
    },
]

console.log(rokket(contacts))