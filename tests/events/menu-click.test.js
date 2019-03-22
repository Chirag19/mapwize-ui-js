const { mwzTest } = require('../core/utils')

mwzTest('On menu button click', (page) => {
  return () => {
    MapwizeUI.map({
      apiKey: 'ContexeoDevAppAPIKEY',
      onMenuButtonClick: (e) => {
        window.callbackTest(null)
      }
    }).then((map) => {
      $('#mwz-menuButton').click()
    }).catch(window.callbackTest)
  }
})