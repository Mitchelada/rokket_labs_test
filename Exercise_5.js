const rokket = (...args) => {
    var aux = args.reduce((a, b) => [...a, ...b]);
    var uniqueNumbers = aux.filter((a, b, self) => self.indexOf(a) == b);
    return uniqueNumbers;
}

console.log(rokket([1, 2, 5], [2, 1, 6]))
console.log(rokket([1, 2, 3], [4, 5, 6]))