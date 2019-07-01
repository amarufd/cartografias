var http = require('http'),
    fs = require('fs'),
    path = require('path');
var port = process.env.PORT || 3000;


http.createServer(function(req, res) {
    var url = './www/' + (req.url == '/' ? 'index.html' : req.url);
    console.log(req.url);
    if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'www', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    } else {
        fs.readFile(url, function(err, html) {
            if (err) {
                var message404 = "There is no such page! <a href='/'>Back to home page</a>";
                res.writeHead(404, {'Content-Type': 'text/html', 'Content-Length': message404.length});
                res.write(message404);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': html.length});
                res.write(html);
            }
            res.end()
        })
    }
}).listen(port)