---
title: Model
---

# `pocket/model`

```javascript
const pocketModel = require("pocket/model")

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
