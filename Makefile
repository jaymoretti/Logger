all: build

build:
	uglifyjs2 ./src/lib/stacktrace.js ./src/utils/log/log.js -o ./log.min.js