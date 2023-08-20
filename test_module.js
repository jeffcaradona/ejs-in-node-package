const test_moddule = require('./src/module');

const moduleObjects = {
    /**
     * test_moddule.renderList() renders the data stored in the module using a ejs view packaged with the module.
     */
    renderList : test_moddule.renderDataAsList,
    /**
     * test_moddule.init() adds test_module collection to res and req objects.
     */
    init : test_moddule.init, 
    setPort:test_moddule.setPort,
    setMessage:test_moddule.setMessage
}
 
module.exports = moduleObjects;