module.exports = (d=[]) => ({
    d,
    push(item) {
        this.d.push(item)
    },
    pop() {
        return this.d.shift()
    },
    peek() {
        return this.d[0]
    }
})
