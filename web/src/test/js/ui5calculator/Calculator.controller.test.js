describe("The display of an initial controller", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
	});

	it("should show 0", function() {
		expect(sut.model.getProperty("/display")).toBe(0);
	});

	it("should show 0 after pressing 0", function() {
		sut.buttonPressed("0");

		expect(sut.model.getProperty("/display")).toBe(0);
	});

	it("should show 5 after pressing 0", function() {
		sut.buttonPressed("5");

		expect(sut.model.getProperty("/display")).toBe(5);
	});

});

describe("The display of a controller showing 5", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
		sut.buttonPressed("5");
	});

	it("should show 50 after pressing 0", function() {
		sut.buttonPressed("0");

		expect(sut.model.getProperty("/display")).toBe(50);
	});

	it("should show 0 after pressing 'C'", function() {
		sut.buttonPressed("C");

		expect(sut.model.getProperty("/display")).toBe(0);
	});
	
});
//negativ number 2a
describe("The display of a controller showing -5", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
		sut.buttonPressed("5");
	});

	it("should show 5 after pressing '+/-'", function() {
		sut.buttonPressed("+/-");

		expect(sut.model.getProperty("/display")).toBe(-5);
	});
});


describe("Initial display of a controller ", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
	});

	it("should show 5 after pressing 5", function() {
		sut.buttonPressed("5");

		expect(sut.model.getProperty("/display")).toBe(5);
	});

	it("should show 0 after pressing '+'", function() {
		sut.buttonPressed("1");
		sut.buttonPressed("+");
		expect(sut.model.getProperty("/display")).toBe(1);
		sut.buttonPressed("5");
		expect(sut.model.getProperty("/display")).toBe(5);
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(6);
	});

});

describe("Addition with multidigit operands", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
		sut.buttonPressed("1");
		sut.buttonPressed("0");
	});

	it("should show 55 after adding 45", function() {
		sut.buttonPressed("+");
		sut.buttonPressed("4");
		sut.buttonPressed("5");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(55);
	});

});
//substraction test 2b
describe("Substraction with multidigit operands", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
		sut.buttonPressed("1");
		sut.buttonPressed("0");
	});

	it("should show -1 after adding 11", function() {
		sut.buttonPressed("-");
		sut.buttonPressed("1");
		sut.buttonPressed("1");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(-1);
	});

});

describe("Equals w/o operation does keep display value unchanged", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
	});

	it("should show 5 after pressing 5", function() {
		sut.buttonPressed("5");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(5);
	});

});

describe("Division Tests", function() {

	var sut = undefined;

	beforeEach(function() {
		sut = sap.ui.controller("ui5calculator.Calculator");
		sut.onInit();
	});

	it("should show 1 after pressing dividing 0.25 by 0.25", function() {
		sut.buttonPressed("0.25");
		sut.buttonPressed("/");
		expect(sut.model.getProperty("/display")).toBe(0.25);
		sut.buttonPressed("0.25");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(1);
	});
	
	it("should show 4 after pressing dividing 8 by 2", function() {
		sut.buttonPressed("8");
		sut.buttonPressed("/");
		expect(sut.model.getProperty("/display")).toBe(8);
		sut.buttonPressed("2");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(4);
	});
	
	it("should show 0.5 after pressing dividing 5 by 10", function() {
		sut.buttonPressed("5");
		sut.buttonPressed("/");
		expect(sut.model.getProperty("/display")).toBe(5);
		sut.buttonPressed("10");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(0.5);
	});
	
	it("should show -0.5 after pressing dividing 5 by -10", function() {
		sut.buttonPressed("5");
		sut.buttonPressed("/");
		expect(sut.model.getProperty("/display")).toBe(5);
		sut.buttonPressed("-10");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(-0.5);
	});

	it("should show 0.5 after pressing dividing -5 by -10", function() {
		sut.buttonPressed("-5");
		sut.buttonPressed("/");
		expect(sut.model.getProperty("/display")).toBe(-5);
		sut.buttonPressed("-10");
		sut.buttonPressed("=");
		expect(sut.model.getProperty("/display")).toBe(0.5);
	});
});
