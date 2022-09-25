<div align="center">
    <h1>Pocket</h1>
    <p>A collection of truly tiny utilities, written in javascript.</p>
</div>

## Description

A collection of a number of javascript utilities and design patterns. All utilities are extremely small and simple, and have no dependencies. Heavily inspired by the work of [@ai](https://github.com/ai/), specifically his "nano" projects like [nanoid](https://github.com/ai/nanoid) and [nanoevents](https://github.com/ai/nanoevents).

## Getting Started

### Installing


* Use npm (or yarn) to install from this repo:

```shell
$ npm install git+https://github.com/coderkearns/pocket
# or
$ yarn add https://github.com/coderkearns/pocket
```

### Simple Usage

Simply `require()` the desired utility from pocket and it should just work.

```javascript
const pocketEvents = require("pocket/events");
const myEventEmitter = pocketEvents()
```

## Utilities

### `events`

```javascript
const pocketEvents = require("pocket/events");
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
    e: Record<string, [](...any)=>void>,
    // on() registers the function `cb` as an event listener for the `event` event. It returns a function to unbind the event.
    on(event: string, cb: (...any)=>void): ()=>void,
    // emit() calls `cb(...args)` for each callback of the `event` event.
    emit(event: string, ...args: any[]): void
}
```

### `subscription`

```javascript
const pocketSubscription = require("pocket/subscription");
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

### `model`

```javascript
const pocketModel = require("pocket/model");
const Users = pocketModel()

// Create some users
const john = Users.create({ name: "John Doe", bio: "" }) // john = { name: "John Doe", bio: "" }
const jane = Users.create({ name: "Jane Doe", bio: "" }) // jane = { name: "Jane Doe", bio: "" }

// Find *the first* user with no bio:
const john2 = Users.get(user => user.bio === "") // john2 = john (same object, *not* a copy.)

// Find *all* users with no bio:
const johnAndJane = Users.select(user => user.bio === "") // johnAndJane = [ john, jane ] (same objects, *not* copies)

// Add a bio to *the first* user with no bio:
Users.update(user => user.bio === "", { bio: "This is a new bio!" }) // (Updates by reference, `john` and `johnAndJane[0]` are both changed also)

// Delete *all* users with no bio:
Users.delete(user => user.bio === "") // (`jane` still exists, but the reference in the database is removed)

// Get *all* users:
const justJohnJaneIsGone = Users.d // justJohnJaneIsGone = [ john ]

```

#### API

```typescript
pocketModel(baseData=[]): {
    // d is an array of all the data in the database, stored as objects.
    d: []Record,
    // create() adds an object to the database, then returns it.
    create(item={}: Record): Record,
    // get() returns the first item in the database for which `fn(item)` is true
    get(fn: (Record)=>boolean): Record,
    // select() returns all items in the database for which `fn(item)` is true
    select(fn: (Record)=>boolean): []Record,
    // `update()` mutates the first item in the database for which `fn(item)` is true, then returns the mutated version. If the item does not exist it mutates a nonexistent object, returning a copy of the given `changes` without adding anything to the database.
    update(fn: (Record)=>boolean, changes: Record): Record,
    // `delete()` removes all items in the database for which `fn(item)` returns true
    delete(fn: (Record)=>boolean): void
}
```

### `queue`

```javascript
const pocketQueue = require("pocket/queue");
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

### `enum`

```javascript
const pocketEnum = require("pocket/enum");
const colors = pocketEnum("RED", "GREEN", "BLUE")

```

## TODOs

- [ ] `pocket/list` linked list implementation

## Contributing

This project is open to contributions! Create an issue about what you want to add or fix, or feel free to submit a pull request!

Starring this repo also helps contribute 😉

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
