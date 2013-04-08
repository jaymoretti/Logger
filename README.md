# Logger
## console.log++
_by [Jay Moretti](http://jaymoretti.com)_

It's often very easy to get lost in a sea of console.log calls. Sometimes you forget to clear them before sending the project to production. Sometimes you need more than a simple output. That's the reason why this console.log extension exists.

### Basic Usage: 
```javascript
	console.log(arguments);
```

### Other features:
```javascript
	window.logger.debugOn(true | false); // turns log output on/off globally
	window.logger.isCompiled(true | false); // outputs function where the log happened instead of file where the log happened.
```

### Sample Call:
```javascript
	var object = {
		prop1 : [0, 1, 2, 3, 4],
		prop2 : "This is a String",
		prop3 : {"prop1" : "meh"}
	};
	console.log(object.prop1, object.prop2, object.prop3);
```

### Output: 
![alt text](http://jaymoretti.com/logger/output.png "Sample Output")

### Build:
Builds are created by uglyfying and merging /src/libs/stacktrace.js and /src/utils/log/log.js together using [Uglify-js2](https://github.com/mishoo/UglifyJS2)

### Licensing 
published under the MIT license

###### This Log polyfil depends on [Javascript Stack Trace](https://github.com/eriwen/javascript-stacktrace) by [Eric Wendelin](http://eriwen.com/) (2008), [Luke Smith](http://lucassmith.name/) (2008), [Loic Dachary](<mailto:loic@dachary.org>) (2008), [Johan Euphrosine](<mailto:proppy@aminche.com>) (2008), [Oyvind Sean Kinsey](http://kinsey.no/blog) (2010), [Victor Homyakov](<mailto:victor-homyakov@users.sourceforge.net>) (2010).
