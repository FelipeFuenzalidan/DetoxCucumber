/* eslint-disable no-undef */
const basePage = require('../pages/basePage');

const mobileElementWelcome = {
  welcomeTitle: 'welcome',
  startButton: 'startButton',
  inputWelcome: 'input',
  listWelcome: 'list',
  stateWelcome: 'runningState',
  counterView: 'counterView',
};

module.exports.verifyTitleWelcome = function() {
  return basePage.verifyVisibleMobileElement(mobileElementWelcome.welcomeTitle);
};

module.exports.startButtonTap = function() {
  return basePage
    .getMobileElementAnchestor(
      mobileElementWelcome.startButton,
      mobileElementWelcome.counterView,
    )
    .tap();
};

module.exports.verifyTextWelcome = function(text) {
  return basePage.verifyText(mobileElementWelcome.stateWelcome, text);
};

module.exports.typeTextInputWelcome = function(text) {
  return basePage.typeText(mobileElementWelcome.inputWelcome, text);
};

module.exports.verifyTextInputWelcome = function(text) {
  return basePage.verifyText(mobileElementWelcome.inputWelcome, text);
};

module.exports.clearTextInputWelcome = function(text) {
  return basePage.clearText(mobileElementWelcome.inputWelcome, text);
};

module.exports.scrollListWelcome = function() {
  return basePage.scroll(mobileElementWelcome.listWelcome, 100, 'down');
};

module.exports.scrollToListWelcome = function() {
  return basePage.scrollTo(mobileElementWelcome.listWelcome, 'bottom');
};

module.exports.swipeListWelcome = function() {
  return basePage.swipe(mobileElementWelcome.listWelcome, 'down', 'fast');
};
