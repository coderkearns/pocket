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
    e: [](...any)=>void,
    // on() registers the function `cb` as an event listener for the `event` event.
    on(event: string, cb: (...any)=>void)=>void,
    // emit() calls `cb(...args)` for each callback of the `event` event.
    emit(event: string, ...args: any[]): void
}
```

### `subscription`

- [ ] TODO add docs for `subscription`

### `model`

- [ ] TODO add docs for `model`

## Contributing

This project is open to contributions! Create an issue about what you want to add or fix, or feel free to submit a pull request!

Starring this repo also helps contribute 😉

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
