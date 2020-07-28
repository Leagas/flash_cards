const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
	mode: process.NODE_ENV == "dev" ? "development" : "production",
	target: "web",
	entry: {
		app: "./app/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "./dist/app"),
		filename: "app.bundle.js",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				resolve: {
					modules: [path.resolve(__dirname), "node_modules"],
					extensions: [".ts", ".tsx"],
				},
				include: path.resolve(__dirname, "app"),
				use: [
					{
						loader: require.resolve("ts-loader"),
						options: {
							configFile: path.join(__dirname, "app/tsconfig.json"),
						},
					},
				]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
		],
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
	plugins: [new HtmlWebpackPlugin({ template: "./app/index.html" })],
}
