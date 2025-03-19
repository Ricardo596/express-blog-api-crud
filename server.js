const express = require (`express`)
const app = express
const port = 300
const postRouter = require (`./routers`)
const controller = require (`./controller`)

app.listen (port, () => {
    console.log(`server start on http://localhost:${port}`)
})

app.use ("/api/v1/post", postRouter)


