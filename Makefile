# Compiled .js files.
compiled=./log.js
minified=./log.min.js

all: build

build:
	uglifyjs2 ./src/lib/stacktrace.js ./src/utils/log/log.js -o ./log.min.js

compile:
	@find ./src/ -type f -name '*.js' | xargs cat > $(compiled)

minify:
	@yuglify $(compiled) && rm -rf $(compiled)