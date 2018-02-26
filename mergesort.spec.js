describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect(split([1,2,3,4])).toEqual([[1, 2], [3, 4]])
    expect(split([1,2,3,4,5])).toEqual([[1, 2], [3, 4, 5]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,2], [3,4])).toEqual([1,2,3,4])
    expect(merge([1,3], [2,4])).toEqual([1,2,3,4])
  });
});

describe('Merge Sort', function(){
  beforeAll(function () {
    spyOn(window, 'merge').and.callThrough();
    spyOn(window, 'split').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array with a single item', function() {
    expect( mergeSort([42]) ).toEqual( [42] );
  });

  it('handles an array with two items', function() {
    expect ( mergeSort([42, 12]) ).toEqual( [12,42] );
    // expect (window.check.calls.count()).toEqual(1);
    // expect (window.swap.calls.count()).toEqual(1);
  })

  it('handles an array with multiple items', function() {
    let arr = [1, 9, 3, 2, 5, 8, 12];
    expect( mergeSort(arr) ).toEqual(arr.sort(function(a, b) {
      return a - b
    }));
    var actualCalls = 1;
    for (let i = 1; i < arr.length; i++) {
      actualCalls += i;
    }
    // expect(window.check.calls.count()).toEqual(actualCalls);
    // expect(window.swap.calls.count()).toEqual(6)
  });

});
