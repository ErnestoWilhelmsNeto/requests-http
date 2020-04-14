const PROXY_CONFIG = [
    {
        origin: 'http://localhost:4200/',
        context: ['/api'],
        target: 'http://localhost:8000/',
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;
