const Post = require (`./data`)

function index(req, res) {
    res.send("Show all post")
}

function show(req, res) {
    res.send("Show ${req.params.id} all the post")
}

function update(req, res) {
    res.send("add post")
}

function store(req, res) {
    res.send(`Update element with ${req.params.id}`)
}

function destroy(req, res) {
    res.send(`Modify ${req.params.id} post`)
}

module.exports = {index, show, update, store, destroy}

