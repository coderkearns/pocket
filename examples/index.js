// EVENTS
console.log("** pocketEvents **")
const pocketEvents = require("../events")

const ee = pocketEvents()
ee.on('log', (type, ...args) => console.log('[', type, ']', args))
ee.on('add', (a, b) => ee.emit('log', 'add', a, b, a+b))

ee.emit('log', 'log', 42)
ee.emit('add', 1, 4)

// SUBSCRIPTION
console.log("\n** pocketSubscription **")
const pocketSubscription = require("../subscription")

const subscription = pocketSubscription()

subscription.subscribe((e) => console.log('e:', e))

subscription.publish({ type: 'msg' })
subscription.publish({ type: 'status', status: 'ok' })

// MODEL
console.log("\n** pocketModel **")
const pocketModel = require("../model")

const User = pocketModel()

console.log('john:', User.create({ name: "John Doe", bio: "" }))
console.log('jane:', User.create({ name: "Jane Doe", bio: "" }))

console.log("get(bio===''):", User.get(u=>u.bio===''))
console.log("select(bio===''):", User.select(u=>u.bio===''))
console.log("update(bio==='', bio->\"I'm cool\"):", User.update(u=>u.bio === '', { bio: "I'm cool." }))

console.log("delete(bio==='')")
User.delete(u=>u.bio==='')

console.log("all:", User.d)

// QUEUE
console.log("\n** pocketQueue **")
const pocketQueue = require("../queue")

const q = pocketQueue()

q.push(1)
q.push(2)
q.push(3)

console.log('peek():', q.peek())

console.log('pop():', q.pop())
console.log('pop():', q.pop())
console.log('pop():', q.pop())
console.log('pop():', q.pop())

// ENUM
console.log("** pocketEnum **")
const pocketEnum = require('../enum')

const colors = pocketEnum("RED", "GREEN", "BLUE")

console.log("colors:", JSON.stringify(colors))
console.log("RED===RED:", colors.RED === colors.RED)
console.log("RED===GREEN:", colors.RED === colors.GREEN)

// LIST
console.log("** pocketList **")
const pocketList = require("../list")

const l = pocketList(1)
l.n = pocketList(2)
l.n.n = pocketList(3)

console.log("l:", l)
console.log("*iter():", [...l.iter()])
