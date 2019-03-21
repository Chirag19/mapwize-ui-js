const puppeteer = require('puppeteer')

function mwzTest(name, evaluateFn) {
  test(name, () => {
    return new Promise((resolve, reject) => {
      puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--windows-size=1920,1080']
      })
        .then(browser => browser.newPage())
        .then(page => {
          return page.goto('localhost:8888/tests/core/index.test.html').then(() => page)
        })
        .then(page => {
          page.exposeFunction('callbackTest', error => {
            page.browser().close()
            if (error) {
              return reject(error)
            }
            return resolve()
          })
          return page
        })
        .then(page => {
          page.evaluate(evaluateFn(page))
          return page
        })
    })
  }, 50000)
}
module.exports = {
  mwzTest: mwzTest
}
