const puppeteer = require("puppeteer")

;(async() => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.emulateMediaType("screen")
  await page.goto("https://yannickbochatay.github.io/puppeteer-pdf-tests/examples/example1.html", { waitUntil : "load" })
  await page.pdf({ printBackground : true })

  process.exit()
})()
