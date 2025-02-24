import http from 'http';
import url from 'url';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);

    if (parseUrl.pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8'});
        res.end('<h1>Bienvenido a mi página web</h1>');
    } else if (parseUrl.pathname === '/about' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Acerca de</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});