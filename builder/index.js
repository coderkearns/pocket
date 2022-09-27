module.exports = (b={}) => ({
    b,
    s(k,v) {
        this.b[k]=v
        return this
    },
    k(k) {
        return {
            v: v => this.s(k,v),
            m: fn => {
                fn(this.b[k])
                return this
            }
        }
    },
    m(fn) {
        fn(this.b)
        return this
    }
})
