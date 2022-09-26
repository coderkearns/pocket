module.exports = (d=[]) => ({
    d,
    create(item={}) {
        this.d.push(item)
        return item
    },
    get(fn) {
        return this.d.find(fn)
    },
    select(fn) {
        return this.d.filter(fn)
    },
    update(fn, changes) {
        return Object.assign(this.get(fn) || {}, changes)
    },
    delete(fn) {
        this.d = this.d.filter(item => !fn(item))
    }
})
