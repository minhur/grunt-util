grunt-util
==========

> Organize your grunt configs in separate files

## Getting Started
This plugin requires Grunt `~0.4.0`. you may install this plugin with this command:

```shell
npm install grunt-util --save-dev
```

## Loading grunt-util

grunt-util allows you to organize your grunt configs in a directory of your choice.  
To use it, just require it and call loadConfig from your `Gruntfile.js`

```js
module.exports = function(grunt) {
    require('grunt-util')(grunt);
    var config = grunt.loadConfigs('configs');
    grunt.initConfig(config);
}
```

## File/Folder structure

After loading grunt-util, you can organize your configs like this:  

```
Gruntfile.js
configs/jshint.js
configs/coffee.js
configs/handlebars.js
configs/less.js
configs/...
```

## Separate config files

Each file can have one or multiple config options.

```js
module.exports = function(grunt) {
	return {
		jshint: {
			changed: {
				src: ['src/**/*.js'],
				filter: grunt.file.changed
			}
		},
        watch: {
			js: {
				files: ['src/**/*.js'],
    			tasks: ['jshint:changed']
	    	},
	    }
	}
}
```





