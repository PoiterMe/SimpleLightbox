module.exports = {
	namespace: "SimpleLightbox",
	browserSupport: ["> 5%", "ie >= 10"],
	module: {
		"base": {
			mimes: {
				js: [
					"dev/js/index.js",
				],
				scss: [
					"dev/scss/index.scss"
				]
			},
			options : {
				createDirs: true,
				mergeFileStructure : true,
			}
		}
	},
	bundle: {
		"SimpleLightbox": {
			modules: ["base"],
			copyTo: ["src/"],
			options: {
				syncModuleDirs: ["img"],
				outputName: "SimpleLightbox.min"
			}
		}
	}
};
