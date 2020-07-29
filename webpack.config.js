const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")
const path = require("path")

const isDevelopment = process.env.NODE_ENV === "dev"

module.exports = {
	mode: process.NODE_ENV == "dev" ? "development" : "production",
	target: "web",
	entry: {
		app: "./app/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "./dist/public"),
		filename: "app.bundle.js",
		publicPath: "/",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				resolve: {
					modules: [path.resolve(__dirname), "node_modules"],
					extensions: [".ts", ".tsx", ".scss"],
				},
				include: path.resolve(__dirname, "app"),
				use: [
					{
						loader: require.resolve("ts-loader"),
						options: {
							configFile: path.join(__dirname, "app/tsconfig.json"),
						},
					},
				],
			},
			{
				test: /\.module\.s(a|c)ss$/,
				loader: [
					isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
							sourceMap: isDevelopment,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./app/index.html" }),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
}
