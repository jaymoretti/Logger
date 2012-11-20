all: build test

build:
	uglifyjs2 ./src/lib/stacktrace.js ./src/utils/log/log.js -o ./log.min.js

test: 
	mocha ./tests/tests.js -R HTML