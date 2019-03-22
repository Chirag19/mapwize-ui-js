const { mwzTest } = require('../core/utils')

mwzTest('On information button click', (page) => {
  return () => {
    MapwizeUI.map({
      apiKey: 'ContexeoDevAppAPIKEY',
      centerOnPlace: "57036cd6b247f50b00a0746e",
      onInformationButtonClick: (e) => {
        window.callbackTest(null)
      }
    }).then((map) => {
      $('#mwz-footerSelection').click()
    }).catch(window.callbackTest)
  }
})