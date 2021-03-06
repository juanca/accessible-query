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

it('finds titled elements', async () => {
  setTimeout(() => {
    document.body.innerHTML =
      '<svg><title id="test-title">Test title</title></svg>' +
      '';
  }, 10);

  expect(await query('Test title')).toBe(document.getElementById('test-title'));
});

it('finds elements by text content', async () => {
  setTimeout(() => {
    document.body.innerHTML =
      '<button id="test-button">Test button</button>' +
      '';
  }, 10);

  expect(await query('Test button')).toBe(document.getElementById('test-button'));
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

it('finds input elements with a value', async () => {
  document.body.innerHTML =
    '<label for="test-input">Test label</label>' +
    '<input id="test-input" />' +
    '';

  setTimeout(() => {
    document.getElementById('test-input').setAttribute('value', 'test value');
  }, 10);

  const node = await query('Test label', { value: 'test value' });
  expect(node).toBe(document.getElementById('test-input'));
  expect(node.getAttribute('value')).toBe('test value');
});

it('finds elements with a role', async () => {
  setTimeout(() => {
    document.body.innerHTML =
      '<label for="test-input">Test label</label>' +
      '<input id="test-input" role="combobox" />' +
      '';
  }, 10);

  const node = await query('Test label', { role: 'combobox' });
  expect(node).toBe(document.getElementById('test-input'));
  expect(node.getAttribute('role')).toBe('combobox');
});
