---
title: Builder
---

# `pocket/builder`

```javascript
const pocketBuilder = require("../builder")

const john = pocketBuilder()
    .s("name", "John")
    .s("age", 42)
    .k("friends").v([])
    .m(person => person.friends.push("Jane"))
    .k("friends").m(friends => friends.push("Jack"))
    .b

john // { name: "John", age: 42, friends: ["Jane", "Jack"] }
```

#### API

```typescript
pocketBuilder(baseObject={}): {
    // b is the current state of the object being built
    b: Record,
    // s() sets the value of `key` to `value` in the object and returns the builder instance
    s(key: string, value: any): this,
    // k() returns a helper object for a specific key
    k(key: string): {
        // v() sets `key` to `value` in the object and returns the builder instance
        v: (value: any)=>this,
        // m() mutates the key `k` in the object and returns the builder instance
        m: (fn: (any)=>void)=>this
    },
    // m() mutates the object and returns the builder instance
    m(fn: (Record)=>void): this
}
```
