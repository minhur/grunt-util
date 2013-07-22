grunt-util
==========

> A collection of grunt utility methods

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-util --save-dev
```

Once the plugin has been installed, require it inside your tasks

```js
module.exports = function(grunt) {
	var util = require('grunt-util')(grunt);
	util.log( { hello: 'world' } );
}
```

## Methods

### log

> Logs your message, prettifying them if they're objects

```js
util.log({ foo: 'bar' });
```

### logConfig([prop])

> Logs prop's grunt config. If prop is ommitted, project's grunt config is logged.  
> Check [grunt.config](http://gruntjs.com/api/grunt.config#grunt.config) for details.

```js
util.logConfig('clean');
```

### extendConfig(config)

> Extends project's grunt config after initialization. Useful for extending existing config from external tasks.  
> Check <http://lodash.com/docs#forEach> for details.

*Gruntfile.js*
```js
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});
	grunt.loadTasks('tasks');
};
```

*tasks/clean.js*
```js
module.exports = function(grunt) {
	var util = require('grunt-util')(grunt);
	util.extendConfig({
		clean: {
			dist: ['dist']
		}
	});
};
```

### mergeConfig(config)

> Same thing as extend config but deep merges with existing config.  
> Check <http://lodash.com/docs#merge> for details.

### template(templateObj, dataObj)

> Converts templateObj with dataObj values using grunt.template.  
> Check <http://gruntjs.com/api/grunt.template> for deatils.




