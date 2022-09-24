module.exports = (l=[]) => ({
    l,
    subscribe(cb) {
        this.l.push(cb)
        return () => this.l = this.l.filter(fn=>fn!==cb)
    },
    publish(...args) {
        l.forEach(cb => cb(...args))
    }
}
)
