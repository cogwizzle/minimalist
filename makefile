build:
	cp ./src/index.css ./public/index.css
	cp ./src/index.js ./public/index.js
start:
	php -S localhost:8080 -t public
