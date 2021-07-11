module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 'off',
        'redux-saga/no-unhandled-errors': 'off',
      },
    },
  ],
};
