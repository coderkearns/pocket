---
title: Event Emitter
---

# `pocket/events`

```javascript
const pocketEvents = require("pocket/events")

const eventEmitter = pocketEvents()

let count = 0

const unsubscribeAdd = eventEmitter.on("add", num => {
    count += num
})

const unsubscribeLog = eventEmitter.on("log", () => {
    console.log("count =", count)
})

eventEmitter.emit("log")
eventEmitter.emit("add", 1)
eventEmitter.emit("log")
eventEmitter.emit("add", 41)
eventEmitter.emit("log")
```

#### API

```typescript
pocketEvents(baseEvents={}): {
    // e is a object holding an array of callbacks for each event name.
    e: { [string]: [](...any)=>void },
    // on() registers the function `cb` as an event listener for the `event` event. It returns a function to unbind the event.
    on(event: string, cb: (...any)=>void): ()=>void,
    // emit() calls `cb(...args)` for each callback of the `event` event.
    emit(event: string, ...args: any[]): void
}
```
