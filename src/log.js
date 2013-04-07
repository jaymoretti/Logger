/* log(params) polyfill by Jay Moretti */
// returns: [ 18/11/2012 :: 01:52:22:322 :: CLASS :: #LINE] [ARGUMENTS]
var __log = window.console.log;
window.logger = new Log();
console.log = logger.log;

function Log(){
	var _isIOS = navigator.userAgent.toLowerCase().match(/(iphone|ipod|iPad)/);
	var _debugOn = true;
	var _isCompiled = false;

	this.debugOn = function(toggle){
		_debugOn = toggle;
	};
	this.isCompiled  = function(toggle){
		_isCompiled = toggle;
	};
	
	this.log=function(){
		if(_debugOn){
			// get stack and parse it's output
			var _stack = printStackTrace()[5].toString();
			//if the call doesn't come from a function, it will just give us the file;
			var _file = "";
			if(_stack.indexOf("at") < 0)
			{
				_file = _stack.split(" ")[1].substring(1,_stack.split(" ")[1].length-1);
			} else {
				_file = _stack.split("at")[1];
			}
			
			// for calls done via console, it won't return a scope.
			var _function,
				_fileName,
				_class,
				_line;

			if(_file.indexOf("anonymous") < 0)
			{
				_function = _stack.split(" ")[0];
				_fileName = _file.split(".js")[0]+".js";
				_class = _fileName.split(".js")[0].split("/js/")[1];
				_line = _file.split(".js")[1].split(":")[1];

			} else {
				_function = _file.substring(1,_file.length-1);
				_fileName = "";
				_class = "Anonymous";
				_line = _file.split(":")[1];
			}

			var _now = new Date();
			var _stamp = "[ " + _now.getDate() + "/" + (_now.getMonth() + 1) + "/" + _now.getFullYear() + " :: " + (_now.getHours().toString().length == 1 ? "0"+_now.getHours() : _now.getHours() ) + ":" + (_now.getMinutes().toString().length == 1 ? "0"+_now.getMinutes() : _now.getMinutes()) + ":" + _now.getSeconds() + ":" + _now.getMilliseconds() + " :: " + (_isCompiled ? _function : _class) + " :: #" + _line + " ]";
			if(__log)
			{
				if(!_isIOS)
				{
					__log.call(window.console, _stamp, arguments);
				} else {
					for (var i = 0; i < arguments.length; i++){
						__log.call(window.console, _stamp, arguments);
					}
				}
			} else {
				for (var j = 0; j < arguments.length; j++){
					alert(stamp, arguments[j]);
				}
			}
		}
	};
}