module.exports = (e = {}) => ({
    e,
    on(event, cb) {
        this.e[event]?.push(cb) || (this.e[event] = [cb])
        return () => this.e[event] = this.e[event].filter(fn=>fn!==cb)
    },
    emit(event, ...args) {
        (this.e[event] || []).forEach(cb => cb(...args))
    }
})
