// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require('craco-alias');

module.exports = {
  babel: {
    // https://emotion.sh/docs/css-prop
    presets: [
      // '@emotion/babel-preset-css-prop',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          importSource: '@emotion/react',
          // development: false,
        },
      ],
    ],
    // plugins: ['@emotion'],
    plugins: ['@emotion/babel-plugin'],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
};
