const { mwzTest } = require('../core/utils')

mwzTest('Hide menu', (page) => {
  return () => {
    MapwizeUI.map({
      apiKey: 'ContexeoDevAppAPIKEY',
      hideMenu: true
    }).then((map) => {
      if ($('#menuBar').hasClass('d-none') == true) {
        window.callbackTest(null)
      } else {
        window.callbackTest("#menuBar don't have d-none css class")
      }
    }).catch(window.callbackTest)
  }
})