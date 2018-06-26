// .test means we will store here our tests
const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

	describe('#add', () => {
		it('should add to numbers', () => {
			var result = utils.add(33,11);

			expect(result).toBe(44);
		});

		it('should add to numebers - false', () => {
			var result = utils.add(33,11+1);

			expect(result).toNotBe(44);
		});
	});

	describe('#square', () => {
		it('should square a number', () => {
			var res = utils.square(2);

			expect(res).toBe(4);
		});

		it('should square a number - false', () => {
			var res = utils.square(2+1);

			expect(res).toNotBe(4);
		});
	});

	describe('#async', () => {
		it('should async add two numbers', (done) => {
			utils.asyncAdd(4, 3, (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});

		it('should async square', (done) => {
			utils.asyncSquare(4, (square) => {
				expect(square).toBe(16).toBeA('number');
				done();
			});
		});
	});
});



// should verify first and last names are set
// assert it includes first name and last name with proper values
describe('Playground', () => {
	it('should split full name', () => {
		var user = {location: 'Sao Paulo', age: 26};
		var testingUser = utils.setName(user, 'Piero Genovese');

		expect(testingUser).toInclude({
			firstName: 'Piero',
			lastName: 'Genovese'
		});
	});
});

// it('should expect some values', () => {
// 	//expect(12).toNotBe(9);
// 	//expect({name: 'Piero'}).toEqual({name: 'Piero'});
// 	//expect([1,2,3]).toInclude(2);
// 	//expect([1,2,3]).toExclude(5);
// 	expect({
// 		name: 'Piero',
// 		age: 26,
// 		location: 'Sao Paulo'
// 	}).toInclude({
// 		age: 26
// 	})
// });
