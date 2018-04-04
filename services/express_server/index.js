const jsonServer = require('json-server');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.post('/login', (req, res) => {
    const { login, password } = req.body;

    if (login !== 'login' || password !== 'password') {
        return res.send(401);
    }

    const dataForToken = {
        username: 'playground',
    };

    return res.send({
        token: jsonwebtoken.sign(dataForToken, 'thisisheadertoken', {
            expiresIn: '1h',
        }),
    });
});

server.use(
    jwt({
        secret: 'thisisheadertoken',
        requestProperty: 'header',
        getToken: function fromHeader(req) {
            if (
                req.headers.authorization &&
                req.headers.authorization.split(' ')[0] === 'Bearer'
            ) {
                return req.headers.authorization.split(' ')[1];
            }
            return null;
        },
        expiresIn: '1h',
    }).unless({ path: ['/login'] }),
);

server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running on port 3001');
});
