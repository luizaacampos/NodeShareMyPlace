const http = require('http')

const server = http.createServer((request, response) => {
    let body = []
    request.on('data', (chunk) => {
        body.push(chunk)
    })
    request.on('end', () => {
        body = Buffer.concat(body).toString()
        let userName = 'unknown User'
        if (body) {
            userName = body.split('=')[1]
        }
        response.setHeader('Content-Type', 'text/html') // text/plain for normal text
        response.write(
            `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="userName" type="text"><button type="submit">Send!</button></form>`
        )
        response.end()
    })

   
})

server.listen(3000)
