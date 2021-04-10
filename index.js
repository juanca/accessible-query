const screen = require('@testing-library/dom');

function accessibleQuery(label) {
  return screen.getByLabelText(document.body, label);
}

module.exports = accessibleQuery;
