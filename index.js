const cwd = process.cwd();
console.log(cwd);
const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");
const iPhone = devices["iPhone 6"]; //引入模拟设备
const url = "https://cn.bing.com/";
const localFile = `file://${cwd}/template/index.html`;
const testUrls = [
  "https://huaban.com/pins/1387079132/",
  "https://huaban.com/pins/1306265648/",
  "https://huaban.com/pins/1315165034/",
  "https://huaban.com/pins/1304281410/"
];
async function launcherApp() {
  console.time("launch");
  const browser = await puppeteer.launch();
  console.timeEnd("launch");
  console.time("newpage");
  const page = await browser.newPage();
  console.timeEnd("newpage");
  console.time("emulate");
  await page.emulate(iPhone);
  console.timeEnd("emulate");
  console.time("gotopage");
  await page.goto(localFile);
  console.timeEnd("gotopage");
  console.time("screenshot");
  await page.screenshot({
    path: `screenShot.png`,
    fullPage: false //是否截取完整的网页
  });
  console.timeEnd("screenshot");
  browser.close();
  console.timeEnd(`alltime`);
}
console.time(`alltime`);
launcherApp();
