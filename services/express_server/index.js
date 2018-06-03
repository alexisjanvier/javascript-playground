const cors = require('cors');
const jsonServer = require('json-server');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

server.use(jsonServer.bodyParser);
server.post('/login', (req, res) => {
    const { login, password } = req.body;
    const configureLogin = process.env.USER_LOGIN || 'login';
    const configurePassword = process.env.USER_PASSWORD || 'password';

    if (login !== configureLogin || password !== configurePassword) {
        return res.sendStatus(401);
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
const port = process.env.BACK_PORT || 80;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
