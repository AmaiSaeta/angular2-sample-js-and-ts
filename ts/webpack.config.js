module.exports = {
	entry: './script.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.ts', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.ts/,
				loader: 'awesome-typescript-loader'
			}
		]
	}
}
