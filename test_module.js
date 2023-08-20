const test_moddule = require('./src/module');

const moduleObjects = {
    /**
     * test_moddule.renderList() renders the data stored in the module using a ejs view packaged with the module.
     */
    renderList : test_moddule.fncPromises.renderList,
    /**
     * test_moddule.init() adds test_module collection to res and req objects.
     */
    init : test_moddule.middleware.init, 

    setPort:test_moddule.middleware.setPort,
    setMessage:test_moddule.middleware.setMessage
}
 
module.exports = moduleObjects;