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
