const path = require('path');
module.exports = {
	entry: './exercises/lesson-1/variables.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/"
	},
	devServer: {
		contentBase: "./dist"
	}
}