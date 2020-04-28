/* eslint-disable no-undef */
module.exports.getMobileElement = function(mobileElement) {
  return element(by.id(mobileElement));
};

module.exports.getMobileElementAnchestor = function(
  mobileElement,
  mobileElementAncestor,
) {
  return element(
    by.id(mobileElement).withAncestor(by.id(mobileElementAncestor)),
  );
};

module.exports.verifyVisibleMobileElement = function(mobileElement) {
  return expect(this.getMobileElement(mobileElement)).toBeVisible();
};

module.exports.tapMobileElement = function(mobileElement) {
  return element(by.id(mobileElement)).tap();
};

module.exports.verifyText = function(mobileElement, text) {
  return expect(this.getMobileElement(mobileElement)).toHaveText(text);
};

module.exports.typeText = function(mobileElement, text) {
  return this.getMobileElement(mobileElement).typeText(text);
};

module.exports.clearText = function(mobileElement, text) {
  return this.getMobileElement(mobileElement).clearText(text);
};

module.exports.scroll = function(mobileElement, point, direction) {
  return this.getMobileElement(mobileElement).scroll(point, direction);
};

module.exports.scrollTo = function(mobileElement, direction) {
  return this.getMobileElement(mobileElement).scrollTo(direction);
};

module.exports.swipe = function(mobileElement, direction, velocity) {
  return this.getMobileElement(mobileElement).swipe(direction, velocity);
};
