describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'check').and.callThrough();
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single item', function() {
    expect( bubbleSort[42] ).toEqual( [42] );
  });

  it('handles an array with two items', function() {
    expect ( bubbleSort[42, 12] ).toEqual( [12,42] );
    expect (window.check.calls.count()).toEqual(2);
    expect (window.swap.calls.count()).toEqual(1);
  })

  it('handles an array with a single item', function() {
    expect( bubbleSort[1, 9, 3, 2, 5, 8] ).toEqual( [1, 2, 3, 5, 8, 9] );

  });

});
