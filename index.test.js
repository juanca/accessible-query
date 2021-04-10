const query = require('./index.js');

it('finds labelled elements', () => {
  document.body.innerHTML =
    '<label for="test-input">Test label</label>' +
    '<input id="test-input" />' +
    '';

  expect(query('Test label')).toBe(document.getElementById('test-input'));
})
