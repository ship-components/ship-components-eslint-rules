import test from 'tape';
import { CLIEngine } from 'eslint';
import eslintrc from '../';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
});

function lint(text) {
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see http://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
}

function wrapComponent(body) {
  return `
import React from 'react';
export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0, class-methods-use-this: 0, indent: 0, quotes: 0, comma-dangle: 0 */
${body}
}
`;
}

test('validate react prop order', (t) => {
  t.test('passes a good component', (t) => {
    t.plan(3);
    const result = lint(wrapComponent(`
componentWillMount() {}
componentDidMount() {}
shouldComponentUpdate() {}
setFoo() {}
getFoo() {}
setBar() {}
someMethod() {}
renderDogs() {}
render() {
return <div />;
}

`));

    t.notOk(result.warningCount, 'no warnings');
    t.notOk(result.errorCount, 'no errors');
    t.deepEquals(result.messages, [], 'no messages in results');
  });
});
