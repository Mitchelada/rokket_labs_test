const rokket = (list) => {
    var longest = list.sort((a, b) => {
        return b.length - a.length
    })[0]
    return longest
}

const list = ['best', 'company', 'ever']
console.log(rokket(list))