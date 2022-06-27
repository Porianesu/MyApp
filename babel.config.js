module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@/store': './src/store',
          '@/components': './src/components',
          '@/pages': './src/pages',
          '@/const': './src/const',
          '@/engine': './src/engine',
          '@/utils': './src/utils',
          '@/assets': './src/assets',
          '@/service': './src/service',
          '@/types': './src/types',
          '@/config': './src/config',
          '@/hooks': './src/hooks',
        },
      },
    ],
  ],
};
