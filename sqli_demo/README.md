# SQLi Service

* There is a `stock` and `users` table
* Can you try to view, add, update the stock?
* Can you try to log in as any user?
* Can you try to log in as a ficticious user?

---

## Pages

* `/playground` - Accepts SQLite queries
* `/login` - Login demos
  * Login 1 - Basic
    * A basic `' OR '1'='1' -- `
  * Login 2 - Paranthesis
    * Use errors to figure out query
  * Login 3 - `/OR/gi` WAF
    * How can we bypass this? `OORR`

---

## Setup

* `yarn`
* `yarn dev`
