const { Builder, By, Key, until } = require('selenium-webdriver');

// Create a WebDriver instance (in this case, for Chrome)
const driver = new Builder().forBrowser('chrome').build();

// Navigate to your Node.js application
driver.get('http://localhost:3000'); // Replace with the actual URL of your application

// Wait for the "Hello World" message to appear and check its text
driver.wait(until.elementLocated(By.xpath('//body[text()="Hello World"]')), 10000).then(() => {
console.log('Test Passed: "Hello World" message found.');

}).catch((error) => {
console.error('Test Failed: "Hello World" message not found.');
}).finally(() => {
driver.quit(); // Close the browser
});