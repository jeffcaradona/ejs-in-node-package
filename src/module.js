console.log('IN module.js');

let ejs = require('ejs');

let moduleData = {
    html: '',
    local: {
        message: '',
        port: null
    }
}

/**
 * The function `renderList` logs a message and renders an HTML file using EJS, passing in a
 * `moduleData` object.
 * @returns the HTML generated by rendering the "list.ejs" file with the provided "moduleData" object.
 */
async function renderListold() {
    console.log('IN test_moddule.renderList()');
    await ejs.renderFile('./node_modules/@jeffcaradona/ejs-in-node-package/src/views/partials/list.ejs', { moduleData: moduleData.local }).then((html) => {
        return html;
    });
}


const  renderDataAsList = () => {
    console.log('IN test_moddule.renderDataAsList()');
    const promise = ejs.renderFile('./node_modules/@jeffcaradona/ejs-in-node-package/src/views/partials/list.ejs', { moduleData: moduleData.local });

    return (req, res, next) => {
        console.log('IN test_moddule.renderDataAsList() middleware ');        
        
        promise.then((html) => {  
            moduleData.html = html     
            console.info(moduleData.html);
            next();
        });
    }
}

/* The `init` function is a middleware function that is used to initialize the `test_module` object
and attach it to the `req` and `res` objects. */
const init = () => {
    return (req, res, next) => {
        console.log('IN test_moddule.init() callback');
        res.test_module = moduleData;
        req.test_module = moduleData;

        if (typeof (moduleData) == 'undefined') console.error('moduleData undefined');
        if (typeof (res.test_module) == 'undefined') console.error('res.test_module undefined');
        if (typeof (req.test_module) == 'undefined') console.error('res.test_module undefined');
        next();
    }
}

/* The `setPort` function is a middleware function that sets the `port` property of the
`moduleData` object to the provided `port` value. It also returns another middleware function
that logs a message and calls the `next` function to continue the middleware chain. This allows
the `setPort` function to be used as middleware in an Express application. */
const setPort = (port) => {
    console.log(`IN test_moddule.setPort('${port}') `);
    try {
        moduleData.local.port = port;
    } catch (e) {
        console.error(e);
    }

    return (req, res, next) => {
        console.log('IN test_moddule.setPort() callback ');
        next();
    }
}
const setMessage = (message) => {
    console.log(`IN test_moddule.setMessage('${message}') `);

    try {
        moduleData.local.message = message;
    } catch (e) {
        console.error(e);
    }
    return (req, res, next) => {
        console.log('IN test_moddule.setMessage() callback ');
        next()
    };
};

module.exports = { init, setPort, setMessage, renderDataAsList };