const {Given, When, Then} = require('cucumber');
const welcomePage = require('../pages/detoxPages');

Given('I should have welcome screen', async () => {
  await welcomePage.verifyTitleWelcome();
});

When('I should count to {string} if pressed once', async text => {
  await welcomePage.startButtonTap();
  await welcomePage.verifyTextWelcome(text);
});

Then('I should wtrite {string} into TextInput', async welcomeText => {
  await welcomePage.typeTextInputWelcome(welcomeText);
  await welcomePage.verifyTextInputWelcome(welcomeText);
  await welcomePage.clearTextInputWelcome(welcomePage);
});

Then('I should scroll the name by', async () => {
  await welcomePage.scrollListWelcome();
});

Then('I should scroll till list end', async () => {
  await welcomePage.scrollToListWelcome();
});

Then('I should swipe scroll', async () => {
  await welcomePage.swipeListWelcome();
});

When('I write {string} in the input text', async textWelcome => {
  await welcomePage.typeTextInputWelcome(textWelcome);
});

Then('I should the result {string} in the input text', async textWelcome => {
  await welcomePage.verifyTextInputWelcome(textWelcome);
});
