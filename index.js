const {
  screen,
  waitFor,
} = require('@testing-library/dom');

async function accessibleQuery(label, attributes = {}) {
  const node = await waitFor(() => {
    const node = screen.queryByLabelText(label) || screen.queryByTitle(label) || screen.queryByText(label);

    if (!node) {
      throw new Error(`Element (${label}) not found.`);
    }

    const matches = Object.entries(attributes).every(([attribute, value]) => {
      return node.getAttribute(attribute) === value;
    });

    if (matches) {
      return node;
    } else {
      throw new Error(`Element (${label}) not found with specific attributes.`);
    }
  });


  return node;
}

module.exports = accessibleQuery;
