# accessible-query

The one query to rule them all.

## Motivation

Most UI is pretty static. 
Queries such as `getBy*` are more than enough to make assertions.
However, when you put it all together, a UI will be asynchronous. 
This library helps simplify test coverage in finding specific accessible UI with specific state.

For example, imagine a user action disables an input element. 
The test coverage would look something like:

```js
// Without
const node = await waitFor(() => {
  const node = screen.findByLabelText('Some input');
  
  if (node.getAttribute('disabled') !== '') {
    throw new Error('Unable to find disabled input.')
  }
  
  return node;
});

expect(node).toBeDisabled();

// With
expect(await query('Some input', { disabled: '' })).toBeDisabled();
```

## How to use

1. Install `accessible-query`
1. Import into test file
1. `await` the result
1. ???
1. Profit!

## Missing functionality

1. Better error messaging -- provide context based on DOM / element state
1. Better `aria-*` attribute support
1. Better boolean attribute support (e.g. `{ disabled: true }` matches on `{ disabled: '' }`)
