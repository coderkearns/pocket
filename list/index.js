const node = {
    *iter() {
        let c = this
        while (c) {
            yield c.d
            c=c.n
        }
    }
}

module.exports = (d, n=null) => {
    const l = Object.create(node)
    return Object.assign(l, {d, n})
}
