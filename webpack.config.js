const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({

  remotes: {
    mfLogin: "http://localhost:4201/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ 
      singleton: true, 
      strictVersion: true, 
      requiredVersion: 'auto' 
    }),
    // Excluir 'shared' porque es una librería local (file:)
    'shared': { 
      singleton: false,
      strictVersion: false,
      requiredVersion: false
    }
  },

});

config.output.publicPath = 'http://localhost:4200/';

module.exports = config
