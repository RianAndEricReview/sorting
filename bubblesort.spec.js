describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'check').and.callThrough();
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single item', function() {
    expect( bubbleSort([42]) ).toEqual( [42] );
  });

  it('handles an array with two items', function() {
    expect ( bubbleSort([42, 12]) ).toEqual( [12,42] );
    expect (window.check.calls.count()).toEqual(1);
    expect (window.swap.calls.count()).toEqual(1);
  })

  it('handles an array with a single item', function() {
    let arr = [1, 9, 3, 2, 5, 8, 12];
    expect( bubbleSort(arr) ).toEqual(arr.sort(function(a, b) {
      return a - b
    }));
    var actualCalls = 1;
    for (let i = 1; i < arr.length; i++) {
      actualCalls += i;
    }
    expect(window.check.calls.count()).toEqual(actualCalls);
    expect(window.swap.calls.count()).toEqual(6)
  });

});
