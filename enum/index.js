module.exports = (...n) => {
    const e = Object.create(null)
    n.forEach((_n,i)=>Object.defineProperty(e, _n, { value: i, enumerable: true }))
    return e
}
