'use strict'

module.exports = function(grunt) {
	var util = {
		log: function(msg) {
			var log = grunt.util._.isObject(msg) ? JSON.stringify(msg, null, 4) : msg;
			grunt.log.write('\n'+log+'\n');
		},
		logConfig: function(key) {
			var config = (key) ? grunt.config(key) : grunt.config();
			this.log(config);
		},
		extendConfig: function(config) {
			grunt.util._.each(config, function(val, key) {
				var current = grunt.config(key);
				var extended = (current === undefined) ? val : grunt.util._.extend(current, val);
				grunt.config(key, extended);
			});
		},
		mergeConfig: function(config) {
			grunt.util._.each(config, function(val, key) {
				var current = grunt.config(key);
				var extended = (current === undefined) ? val : grunt.util._.merge(current, val);
				grunt.config(key, extended);
			});	
		},
		template: function(template, data) {
			grunt.util._.extend(data, {
				pkg: grunt.config('pkg')
			});
			return JSON.parse(grunt.template.process(JSON.stringify(template), { data: data }));
		}
	};
	return util;
};