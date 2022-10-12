# wg_updater

This is a quick-and-dirty NodeJS script to periodically update a WG-Gesucht.de listing so it gets pushed to the top of all listings.

It utilizes selenium-webdriver and chromedriver to automate a Chrome/Chromium browser that runs in headless mode.

## [config.js]

Make a copy of **config-sample.js** and rename it to **config.js**.
Now fill in your login information, the offer-ID of the WG-Gesucht.de listing you want to keep updated and how often you want the offer to be updated (in minutes).
