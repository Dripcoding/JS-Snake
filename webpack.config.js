const webpack = require('webpack')
const path = require('path')

const config = {
	entry: './public/js/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
}

module.exports = config
