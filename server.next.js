const {createServer} = require('http');
const next = require('next');

const app = next({
    dev : process.env.NODE_ENV !== 'production'
})

const routes = require('./routes.next');

const handler = routes.getRequestHandler(app);

const port = 3000 || env.process.PORT;

app.prepare().then(() => {
    createServer(handler).listen(port,(err)=>{
        if(err) throw err;
        console.log(`Ready for listening to ${port}`);
    })
})