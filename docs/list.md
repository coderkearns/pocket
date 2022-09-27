---
title: Linked List
---

# `pocket/list`

```javascript
const pocketList = require("../list")

// Create a list node
const l = pocketList(1)

// Set it's next to a new node, whose next is also a new node
l.n = pocketList(2, pocketList(3))

for (let data of l.iter()) {
    data // 1, then 2, then 3
}
```

#### API

```typescript
pocketList(data, next=null): {
    // d is the data stored in the list node
    d: any,
    // n is the next node, or null
    n: pocketList|null,
    // iter() iterates over the list and returns the `.d` of each node
    iter(): Generator<any>
}
```
