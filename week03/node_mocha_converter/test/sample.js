
describe("test", function() {

    before(() => console.log("Testing started – before all tests"));
    after(() => console.log("Testing finished – after all tests"));
  
    beforeEach(() => console.log("Before a test – enter a test"));
    afterEach(() => console.log("After a test – exit a test"));
  
    it('test 1', () => console.log(1));
    it('test 2', () => console.log(2));
  
  });