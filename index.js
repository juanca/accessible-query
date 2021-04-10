const screen = require('@testing-library/dom');

async function accessibleQuery(label) {
  const node = await screen.findByLabelText(document.body, label);

  return node;
}

module.exports = accessibleQuery;
