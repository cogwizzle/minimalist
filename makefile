build:
	cp -R src/* docs/
start:
	php -S localhost:8080 -t docs
