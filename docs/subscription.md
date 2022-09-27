---
title: Subscription
---

# `pocket/subscription`

```javascript
const pocketSubscription = require("pocket/subscription")

const countSubscription = pocketSubscription()

let count = 0

const unsubscribe = countSubscription.subscribe((c) => {
    console.log("count is now", c)
})

const setCount = c => {
    count = c
    countSubscription.publish(c)
}

setCount(1)
setCount(2)
setCount(3)
```

#### API

```typescript
pocketSubscription(baseListeners=[]): {
    // l is an array holding all the listener functions
    l: [](...any)=>void,
    // subscribe() registers a listener callback `cb`. It returns a function to unsubscribe the listener.
    subscribe(cb: (...any)=>void): ()=>void,
    // publish() calls all the listener functions with the given `args`.
    publish(...args: []any): void

}
```
