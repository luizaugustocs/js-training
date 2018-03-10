const {mergeArraysWithSpread, mergeArrays } = require('./ex02-mergeArray')


test('Merge entre dois arrays', () => {
    const arr1 = [1, 2];

    const arr2 = [3, 4];

    const result = [1, 2, 3, 4]

    expect(mergeArrays(arr1, arr2)).toEqual(result);
})

test('Merge empty objects', () => {

    expect(mergeArrays([], [])).toEqual([])
});


test('MergeWithSpread entre dois arrays', () => {
    const arr1 = [1, 2];

    const arr2 = [3, 4];

    const result = [1, 2, 3, 4];

    expect(mergeArraysWithSpread(arr1, arr2)).toEqual(result);
})

test('MergeWithSpread empty objects', () => {

    expect(mergeArraysWithSpread([], [])).toEqual([])
});

