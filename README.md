# wg_updater

This is a quick-and-dirty NodeJS script to periodically update a WG-Gesucht.de listing so it gets pushed to the top of all listings.

It utilizes selenium-webdriver and chromedriver to automate a Chrome/Chromium browser that runs in headless mode.

## dependencies

You'll need to install **selenium-webdriver** first:

```
npm install selenium-webdriver
```

Now download **chromedriver** from their [website](https://chromedriver.chromium.org/getting-started), store it somewhere safe (i.e where you won't delete or move it) and include the chromedriver location in your PATH environment variable.

Alternatively you can install it using `apt-get` like so:

```
sudo apt-get install chromium-chromedriver
```

Do be warned though, that after a Chrome update your chromedriver might be out of date and the apt-get repository might not be up-to-date yet.

## config.js

Make a copy of **config-sample.js** and rename it to **config.js**.
Now fill in your login information, the offer-ID of the WG-Gesucht.de listing you want to keep updated and how often you want the offer to be updated (in minutes).

## running the script

```
node wg_updater.js
```
