const { mwzTest } = require('../core/utils')

mwzTest('Load map', (page) => {
  return () => {
      // MapwizeUI.map('mapwize', { // Also works
      MapwizeUI.map({ // Also works
          // container: 'mapwize',  // Also works
          apiKey: 'ContexeoDevAppAPIKEY',
          mapboxOptions: {},
          mapwizeOptions: {},
          onInformationButtonClick: (e) => {
              console.log('clickOnSelectedInformation', e)
          },
          onMenuButtonClick: (e) => {
              console.log('clickOnMenu', e)
          }
      }).then((map) => {
        window.callbackTest(null)
      })
  }
})