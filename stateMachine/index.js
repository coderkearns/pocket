module.exports = (s, d) => ({
    ...Object.keys(s).reduce((a, k) => (a[k]=k,a), {}),
    s,
    state: d,
    do(e) {
        return (this.state = this.s[this.state]?.[e]) || null
    }
})
