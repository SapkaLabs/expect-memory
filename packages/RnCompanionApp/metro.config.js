const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path')

// this specifies the folder where are located the node_modules for the project
const watchFolders = [
    path.resolve(path.join(__dirname, '..', '..')),
    // path.resolve(path.join(__dirname, '../../node_modules/@inphiz/components')),
  ]

  const nodeModulesPaths = [path.resolve(path.join(__dirname, '..', '..', 'node_modules'))]

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    resolver: {
        nodeModulesPaths,
      },
    watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
