'use strict';

module.exports = function(grunt) {
	var fs = require('fs');
	var pkg = grunt.file.readJSON('package.json');
	grunt.util._.extend(grunt, {
		loadConfigs: function(path) {
			var config = {
				pkg: pkg
			};
			grunt.util._.forEach(fs.readdirSync(path), function(file) {
				grunt.util._.merge(config, require('../../' + path + '/' + file)(grunt));
			});
			return config;
		}
	});
	grunt.util._.extend(grunt.file, {
		changed: function(filepath) {
			return fs.statSync(filepath).mtime.getTime() > Date.now() - 10000;	
		}
	});
	grunt.util._.each(pkg.dependencies, function(val, key) {
		if (key === 'grunt-util') return true;
		if (key === 'grunt-template-jasmine-requirejs') return true;
		if (key.substring( 0, 6 ) === 'grunt-') grunt.loadNpmTasks( key );
	});
	if (typeof grunt.option('production') === 'undefined') {
		grunt.util._.each(pkg.devDependencies, function(val, key) {
			if (key === 'grunt-util') return true;
			if (key === 'grunt-template-jasmine-requirejs') return true;
			if (key.substring( 0, 6 ) === 'grunt-') grunt.loadNpmTasks( key );
		});
	}
}