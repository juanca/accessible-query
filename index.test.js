const query = require('./index.js');

it('finds labelled elements', async () => {
  document.body.innerHTML =
    '<label for="test-input">Test label</label>' +
    '<input id="test-input" />' +
    '';

  expect(await query('Test label')).toBe(document.getElementById('test-input'));
})
