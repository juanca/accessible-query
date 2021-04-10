const {
  screen,
  waitFor,
} = require('@testing-library/dom');

async function accessibleQuery(label, attributes = {}) {
  const node = await waitFor(() => {
    const node = screen.getByLabelText(label);

    const matches = Object.entries(attributes).every(([attribute, value]) => {
      return node.getAttribute(attribute) === value;
    });

    if (matches) {
      return node;
    } else {
      throw Error(`Element (${label}) not found with specific attributes.`);
    }
  });


  return node;
}

module.exports = accessibleQuery;
