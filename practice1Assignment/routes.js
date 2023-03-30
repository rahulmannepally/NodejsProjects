const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html><body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if(url === '/users') {
        res.write('<html><body><ul><li>Hello</li><li>Hi</li></ul></body></html>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
          });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);//username=dgscj
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

}
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';