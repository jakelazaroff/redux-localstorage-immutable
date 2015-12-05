BIN=node_modules/.bin

MOCHA_ARGS=	--compilers js:babel/register --recursive

MOCHA_TARGET=tests

build:
	$(BIN)/babel src --out-dir lib

clean:
	rm -rf lib

test:
	NODE_ENV=test $(BIN)/mocha $(MOCHA_ARGS) $(MOCHA_TARGET)
