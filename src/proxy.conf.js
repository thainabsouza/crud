const PROXY_CONFIG = [
  {
    CONTEXT:['/api'],
    target: 'http://angular-test.blabs.us/cadastrar-produtos',
    secure: false,
    logLevel: 'debug',
    pathRewrite:{'^/api':''}
  }
];

module.exports = PROXY_CONFIG;
