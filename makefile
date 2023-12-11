build:
	cp -R src/* public/
start:
	php -S localhost:8080 -t public
