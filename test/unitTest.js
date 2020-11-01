const chai = require('chai');
const assert = chai.assert;
const functions = require('../functions');

describe('sum',function(){
      it('should return 4 when adding 2 and 2',function(){
        assert.equal(functions.sum(2,2), 4);
      });
      it('should return 10 when adding -5 and -5',function(){
        assert.equal(functions.sum(-5,-5), -10);
      });
      it('should return 12 when adding 4.5 and 7.5',function(){
        assert.equal(functions.sum(4.5,7.5), 12);
      });
});

describe('product',function(){
      it('should return 25 when multiply 5 and 5',function(){
        assert.equal(functions.product(5,5), 25);
      });
      it('should return 0 when multiply 5 and 0',function(){
        assert.equal(functions.product(0,5), 0);
      });
      it('should return 127.5 when multiply 5 and 25.5',function(){
        assert.equal(functions.product(5,25.5), 127.5);
      });
});

describe('min',function(){
      it('should return 3 if numbers are 3 and 3',function(){
        assert.equal(functions.min(3,3), 3);
      });
      it('should return -2 when numbers are -2 and 0',function(){
        assert.equal(functions.min(-2,0), -2);
      });
      it('should return 1.5  when numbers are 2.0 and 1.5',function(){
        assert.equal(functions.min(2.0,1.5), 1.5);
      });
});

describe('max',function(){
      it('should return 20 when numbers are 10 and 20',function(){
        assert.equal(functions.max(10,20), 20);
      });
      it('should return 9.5 when numbers are 9.5 and 7.5',function(){
         assert.equal(functions.max(9.5,7.5), 9.5);
      });
      it('should return 10  when numbers are 10 and -10',function() {
        assert.equal(functions.max(10,-10), 10);
      });
});

describe('head',function(){
      it('should return 5 when array are[5,7,9]',function(){
        let arr = [5,7,9];
        assert.equal(functions.head(arr), 5);
      });
      it('should return null when array are empty',function() {
        let arr = [];
        assert.equal(functions.head(arr), null);
      });
      it('should return aman when array are["aman","harpreet","horatiu"]',function(){
        let arr = ["aman","harpreet","horatiu"];
        assert.equal(functions.head(arr), "aman");
      });
});

describe ('tail',function(){
      it('it should return null when array are empty',function(){
        let arr = [];
        assert.isNull(functions.tail(arr));
      });
      it('it should return 10 when arr are[0,5,10]',function() {
        let arr = [0,5,10];
        assert.equal(functions.tail(arr), 10);
      });
      it('it should return peter when provided rray is["a","b","peter"]',function(){
        let arr = ["a","b","peter"];
        assert.equal(functions.tail(arr),"peter");
      });
});

describe ('mid',function(){
      it('it should return null when array are empty',function(){
        let arr = [];
        assert.equal(functions.mid(arr), null);
      });
      it('should return 10 when array is[5,10,15]',function(){
        let arr = [5,10,15];
        assert.equal(functions.mid(arr), 10);
      });
});

describe('total',function(){
      it('should return 12 when  array total [5,6,1]',function(){
        let arr=[5,6,1]
        assert.equal(functions.total(arr), 12);
      });
      it('should return -4 when array total[2,2,-8]',function(){
        let arr = [2,2,-8];
        assert.equal(functions.total(arr), -4);
      });
      it('should return 0 when array total[0,0,0]',function() {
        let arr = [0,0,0];
        assert.equal(functions.total(arr), 0);
      });
});

describe('average',function(){
      it('should return 20 when array is[10,20,20]',function(){
        let arr = [10,20,30];
        assert.equal(functions.average(arr), 20);
      })
      it('should return null when array is empty',function(){
        let arr = [];
        assert.equal(functions.average(arr), null);
      })
      it('should return 1 when array is[1,1,1]',function(){
        let arr = [1,1,1];
        assert.equal(functions.average(arr), 1);
      });
});

describe('smallest',function(){
         it('should return 10 when array is[10,20,30]',function(){
           let arr = [10,20,30];
           assert.equal(functions.smallest(arr), 10);
         })
         it('should return -1 when array is[-1,0,1]',function(){
           let arr = [-1,0,1];
           assert.equal(functions.smallest(arr), -1);
         })
         it('should return 2 when array is[2.5,2,3.5]',function(){
            let arr = [2.5,2,3.5];
            assert.equal(functions.smallest(arr), 2);
         })
});

describe('largest',function(){
         it('should return 3 when array is[2,3,3]',function(){
           let arr = [2,3,3];
           assert.equal(functions.largest(arr), 3);
         })
         it('should return 10 when array is[-12,10,-11]',function(){
           let arr = [10,-12,-11];
           assert.equal(functions.largest(arr), 10);
         })
         it('should return null when array is[]',function() {
            let arr = [];
            assert.equal(functions.largest(arr), null);
         })
});

describe('merge',function(){
         it('should return null when  both array are empty',function(){
           let arr1 = [];
           let arr2 = [];
           assert.isNull(functions.merge(arr1,arr2));
         })
         it('should return [1,3] when one arr1 isempty and other arr2[1,3]',function(){
           let arr1 = [];
           let arr2 = [6,5];
           assert.deepEqual(functions.merge(arr1,arr2),[6,5]);
         })
         it('should return [1,4,3,5] when one arr1 is[1,3] and other arr2[4,5]',function(){
           let arr1 = [1,3];
           let arr2 = [4,5];
           assert.deepEqual(functions.merge(arr1,arr2),[1,4,3,5]);
         })
});
           


