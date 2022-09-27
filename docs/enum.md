---
title: Enum
---

# `pocket/enum`

Lorem ipsum dolor sit amet, consectet adip reprehenderit non proident. Excepteur sint et ipsum dolor sit amet et ipsum dolor sit amet.

```javascript
const pocketEnum = require("pocket/enum")

const colors = pocketEnum("RED", "GREEN", "BLUE")

JSON.stringify(colors) // { "RED": 0¸ "GREEN": 1, "BLUE": 2 }

colors.RED === colors.RED   // true
colors.RED !== colors.GREEN // true
```
