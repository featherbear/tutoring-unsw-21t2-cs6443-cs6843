import polka from 'polka'
import redirect from '@polka/redirect'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import { createQuery, init } from './database'
import crypt from './dodgyCrypto'

const server = polka()

let db = init();

server.use(bodyParser.json())

server.post('/doLogin', (req, res) => {
    const { username, password } = req.body

    const OK = (data) => res.end(JSON.stringify({ status: true, auth: data }))
    const FAIL = (err) => res.end(JSON.stringify({ status: false, message: err }))

    let query = createQuery`SELECT username, password FROM users WHERE username = '${username}' AND password = '${password}'`

    try {
        let result = db.prepare(query).get()
        if (result) {
            return OK(crypt.encrypt(result))
        }
    } catch (e) {
        return FAIL(e.toString())
    }

    return FAIL("Username or password incorrect")
})

server.use(cookieParser())

server.get('/', (req, res) => {
    res.end(fs.readFileSync('site/_root.html').toString().replace("${USERNAME}", res['auth'].username))
})

server.get('/login', (req, res) => {
    res.end(fs.readFileSync('site/login.html'))
})

server.use((req, res, next) => {
    if (["/login", "/doLogin"].includes(req.path)) return next()

    const { auth: authCookie } = req.cookies
    if (!authCookie) return redirect(res, "/login")

    if (!(res['auth'] = crypt.decrypt(authCookie))) return redirect(res, "/login")

    next();
})


export default function listen() {
    let HOST = process.env["HOST"] || "0.0.0.0"
    let PORT = process.env["PORT"] || 7000
    server.listen(PORT, HOST, () => {
        console.info(`Server listening on ${HOST}:${PORT}`)
    })
}
