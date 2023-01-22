const puppeteer = require('puppeteer');
const fs = require('fs/promises'); 
async function first(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://app-staging.youshd.com/login');
    
    await page.type('.form-control field','9917173611');
    await page.click('.button-continue')

    await page.waitForNavigation();

    await page.type('1lv5tg','1')
    await page.type('fbz8qj','2')
    await page.type('fa1e0u','3')
    await page.type('6fafd9','4')
    await page.type('if5hv','5')
    await page.type('uboc49','6')
    await page.click('.button-continue')

    await page.waitForNavigation();

    await browser.close();
}