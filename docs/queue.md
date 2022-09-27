---
title: Queue
---

# `pocket/queue`

```javascript
const pocketQueue = require("pocket/queue")

const q = pocketQueue()

// Push some items
q.push(1)
q.push(2)
q.push(3)

// Check the first in line without removing it
let one = q.peek()

// Get + remove the items from the front of the line
one = q.pop()
const two = q.pop()
const three = q.pop()

// Pop when empty
const _undefined = q.pop()
```

#### API

```typescript
pocketQueue(baseData=[]): {
    // d is an array of all the data in the queue
    d: []any,
    // push() adds the `item` to the end of the queue
    push(item: any): void,
    // peek() returns the item at the beginning of the queue without removing it
    peek(): any|undefined,
    // pop() removes and returns the item at the beginning of the queue
    pop(): any|undefined
}
```
