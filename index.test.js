const query = require('./index.js');

it('finds labelled elements', async () => {
  setTimeout(() => {
    document.body.innerHTML =
      '<label for="test-input">Test label</label>' +
      '<input id="test-input" />' +
      '';
  }, 10);

  expect(await query('Test label')).toBe(document.getElementById('test-input'));
});

it('finds disabled elements', async () => {
  document.body.innerHTML =
    '<label for="test-input">Test label</label>' +
    '<input id="test-input" />' +
    '';

  setTimeout(() => {
    document.getElementById('test-input').setAttribute('disabled', '');
  }, 10);

  const node = await query('Test label', { disabled: '' });
  expect(node).toBe(document.getElementById('test-input'));
  expect(node.getAttribute('disabled')).toBe('');
});
