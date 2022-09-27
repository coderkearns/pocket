---
title: Home
---

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

## Documentation

The documentation can be found at [coderkearns.github.io/pocket](//coderkearns.github.io/pocket).

Note that it is still very incomplete - feel free to check out the "[Contributing](#contributing)" section if your would like to help.

## TODOs

- [X] `pocket/list` linked list implementation
- [X] `pocket/stateMachine` state machine
- [ ] `pocket/builder`
- [ ] `pocket/graph`
- [ ] `pocket/tree`
- [ ] Split the docs into their own seperate files in the /docs folder

## Contributing

This project is open to contributions! Create an issue about what you want to add or fix, or feel free to submit a pull request!

Starring this repo also helps contribute 😉

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
