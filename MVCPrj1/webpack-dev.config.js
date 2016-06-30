

if (global.Promise == null) {
    global.Promise = require('es6-promise')
}


var path = require('path');
//var webpack = require('webpack');
var React = require('react');
var ReactDOM =require('react-dom');


//var $ = require('jquery');
// load everything 
//require('jquery-ui');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: {
      //CheckForm:'./CheckForm.jsx'
      //,DesignForm:'./DesignForm.jsx'
      //,
      cascadeselect:'./cascadeselect.jsx'
    },
    output: {
        path: path.join(__dirname, 'Scripts/Flow'),
        filename: '[name].bundle.js'
    },
    module: {
    loaders: [
      {test: /\.css$/ , loader: 'style-loader!css-loader?sourceMap'},
      {
        // Test for js or jsx files.
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  externals: {
      // Don't bundle the 'react' npm package with the component.
      //'react': 'React'
  },
  resolve: {
      // Include empty string '' to resolve files by their explicit extension
      // (e.g. require('./somefile.ext')).
      // Include '.js', '.jsx' to resolve files by these implicit extensions
      // (e.g. require('underscore')).
      extensions: ['', '.js', '.jsx'],
      alias:{
	       "jquery-ui": "jquery-ui/jquery-ui.js",	
	       modules: path.join(__dirname, "node_modules"),
      }
  },
  resolve2: {
      extensions: ['', '.js', '.jsx'],
      root: [path.join(__dirname, "bower_components")],
      alias: {
        "jquery": "jquery",
        "jquery-ui": "jquery-ui/jquery-ui.js",
    }
  }
  /*
  ,plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
  */
};
