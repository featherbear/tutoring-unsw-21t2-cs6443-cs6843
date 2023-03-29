import Result from './Result.svelte'

export function get(req, res) {
    let ssr = Result.render({
        query: req.query.q
    })

    return res.end(JSON.stringify(ssr))
}