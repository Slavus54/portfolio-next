const {Prisma} = require('prisma-binding')

const db = new Prisma({
    endpoint: 'https://eu1.prisma.sh/xmirosfromsibir-3a210c/Port-Next-Server/dev',
    debug: false
})

module.exports = db;