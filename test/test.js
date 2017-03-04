var expect = require('chai').expect;
var assert = require('assert');
var sinon = require('sinon');

require('./test.helpers.js');
require('../src/app.js');

describe('App module', function() {
    var scope;
    var ctrl;

    beforeEach(ngModule('fibonacci.app'));
    beforeEach(function() { alert = sinon.spy(); });

    it('User input control', inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('main.controller', { $scope: scope });

        scope.userInput = 101;		// vi antar att användaren skriver in en invalid siffra (mer än 100)
        scope.fib();

        expect(alert.calledOnce).to.be.true;		// vi förväntar oss att användaren ska se en alert
        assert.strictEqual(scope.userInput, 0);		// userInput har nollställts
        expect(scope.fibList).to.be.empty;			// fibonacci nummerlistan är tom

        scope.userInput = 100;						// vi antar att användaren skriver in en valid siffra
        scope.fib();
        expect(scope.fibList).to.not.be.empty;		// listan är inte tom
    }));

    it('Fibonacci calculation function control', inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('main.controller', { $scope: scope });

        scope.userInput = 10;											// om användaren skriver in 10
        scope.fib();

        // hämta vilken fibonacci nummer användarinput motsvarar genom funktionen nedan (10 = 55 i detta fall)
        var fibResult = fibCheck(scope.userInput);
        // den 10:e siffran (userInput) som finns i listan ska vara lika med siffran som vi validerade i funktionen nedan (fibCheck)
        assert.equal(scope.fibList[scope.userInput], fibResult);
    }));
});

function fibCheck(num) {
    if (num <= 0) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }
    else {
        return fibCheck(num - 1) + fibCheck(num - 2);
    }
};
