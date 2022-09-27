---
title: State Machine
---

### `pocket/stateMachine`

```javascript
const pocketStateMachine = require("pocket/stateMachine")

// Create a state machine. The first argument is the schema, the second is the starting state
const promiseMachine = pocketStateMachine({
    // Each key is a state, each value is an object with each event and the state it points to
    PENDING: { reject: "REJECTED", resolve: "FUFILLED" },
    REJECTED: { handle: "FUFILLED" },
    // A state does not need to have any events, it will be unexitable:
    FUFILLED: {}
}, 'PENDING')

// This is the schema that was passed in. Generally you should not edit it
promiseMachine.s

// Each state now is a property of the machine:
promiseMachine.PENDING // "PENDING"
promiseMachine.REJECTED // "REJECTED"
promiseMachine.FUFILLED // "FUFILLED"

// .state returns the current state
promiseMachine.state === promiseMachine.PENDING

// To call one of the current state's events, use .do(event)
// It will either return the new state ("FUFILLED") or null if the event does not exist.
promiseMachine.do('resolve') // "FUFILLED"
promiseMachine.state === promiseMachine.FUFILLED
```

#### API

```typescript
pocketStateMachine(schema: Record<string, Record<string, string>>, startingState: string): {
    // s is the schema of the state machine
    s: { [string]: { [string]: string } },
    // state is the current state's string value
    state: string,
    // do() does the event `e` if it exists for the current state, and returns either the new state or null.
    do(e: string): string|null,

    // Each key of schema is now a property of the state machine
    [K: string in keyof schema]: K
```
