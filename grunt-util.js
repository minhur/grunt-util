'use strict';

module.exports = function(grunt) {
	var fs = require('fs');
	grunt.util._.extend(grunt, {
		loadConfigs: function(path) {
			var config = {
				pkg: grunt.file.readJSON('package.json')
			};
			grunt.util._.forEach(fs.readdirSync(path), function(file) {
				grunt.util._.merge(config, require('./' + path + '/' + file)(grunt));
			});
			return config;
		}
	});
	grunt.util._.extend(grunt.file, {
		changed: function(filepath) {
			return fs.statSync(filepath).mtime.getTime() > Date.now() - 5000;	
		}
	});
}