module.exports = (s, d) => ({
    ...Object.keys(s).reduce((a, k, i) => (a[k]=k,a), {}),
    s,
    state: d,
    do(transition) {
        if (transition in this.s[this.state]) {
            return (this.state = this.s[this.state][transition])
        }
        return false
    }
})
