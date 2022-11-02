module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  arrowParens: 'avoid',
  endOfLine: 'auto',
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  semi: true,
  importOrder: ['react', 'next', '^[^.~]+', '^~.+$', '^\\..+$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
