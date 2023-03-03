// Part 2 Manual Testing link: https://trello.com/invite/b/TPjOepMj/ATTIe8ec9b351c5388a67d68ef74a7ec2e79C01CC356/week-6-assessment

import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})

test('draw button', async() => {
    let drawBtn = await driver.findElement(By.css("#draw"))
    await drawBtn.click()
    await driver.sleep(5000)

})

test('add button',async () => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const botBtn = await driver.findElement(By.className("bot-btn"));
    await botBtn.click();
    const playerBot = await driver.findElement(By.id("player-duo"));

    await driver.sleep(5000);
})

