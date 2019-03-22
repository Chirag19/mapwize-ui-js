const { mwzTest } = require('../core/utils')

mwzTest('Load map', (page) => {
  return () => {
    MapwizeUI.map({
      apiKey: 'ContexeoDevAppAPIKEY'
    }).then((map) => {
      window.callbackTest(null)
    }).catch(window.callbackTest)
  }
})