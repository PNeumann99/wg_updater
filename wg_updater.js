const chrome = require("selenium-webdriver/chrome");
const { By, Key, Builder } = require("selenium-webdriver");
var config = require("./settings/config.js");
const screen = {
  width: 640,
  height: 480,
};

async function update_offer(interval) {
  let driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();

  await driver.get("http://www.wg-gesucht.de");

  try {
    await driver.findElement(By.id("cmpbntyestxt")).click();
  } catch (err) {
    console.log("No cookie banner found");
  }

  try {
    await driver.executeScript(
      () => {
        document.getElementById("login_email_username").value = arguments[0];
        document.getElementById("login_password").value = arguments[1];
        document.getElementById("login_submit").click();
      },
      config.login.username,
      config.login.password
    );
  } catch (err) {
    console.log("Login failed");
  }

  await driver.sleep(5000).then(console.log("Login successful!"));

  await driver.get(
    "https://www.wg-gesucht.de/angebot-bearbeiten.html?action=update_offer&offer_id=" +
      config.offer.id
  );

  await driver.sleep(5000).then(console.log("WG-Gesucht ad loaded!"));

  while (true) {
    await driver.executeScript(() => {
      document.getElementById("update_offer_nav").click();
    });
    console.log(
      "Ad last updated on: " +
        new Date(Date.now()).toLocaleString("de-DE", {
          timeZone: "Europe/Berlin",
        })
    );
    await driver.sleep(interval).then(() => {
      console.log("Ad is being updated...");
    });
  }
}

update_offer(config.offer.interval * 60000);
