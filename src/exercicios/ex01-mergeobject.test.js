const {mergeObjects, mergeObjectsWithAssign, mergeObjectsWithSpread} = require('./ex01-mergeobject')


test('Merge entre dois objetos', () => {
    const obj1 = {
        id: 1,
        nome: 'obj1'
    }

    const obj2 = {
        email: 'obj2@gmail.com',
        telefone: '1234567890'
    }


    const result = {
        id: 1,
        nome: 'obj1',
        email: 'obj2@gmail.com',
        telefone: '1234567890'
    }

    expect(mergeObjects(obj1, obj2)).toEqual(result);
})

test('Merge empty objects', () => {

    expect(mergeObjects({}, {})).toEqual({})
});

test('MergeWithAssign entre dois objetos', () => {
    const obj1 = {
        id: 1,
        nome: 'obj1'
    }

    const obj2 = {
        email: 'obj2@gmail.com',
        telefone: '1234567890'
    }


    const result = {
        id: 1,
        nome: 'obj1',
        email: 'obj2@gmail.com',
        telefone: '1234567890'
    }

    expect(mergeObjectsWithAssign(obj1, obj2)).toEqual(result);
})

test('MergeWithAssign empty objects', () => {

    expect(mergeObjectsWithAssign({}, {})).toEqual({})
});

test('MergeWithSpread entre dois objetos', () => {
    const obj1 = {
        id: 1,
        nome: 'obj1'
    }

    const obj2 = {
        email: 'obj2@gmail.com',
        telefone: '1234567890'
    }


    const result = {
        id: 1,
        nome: 'obj1',
        email: 'obj2@gmail.com',
        telefone: '1234567890'
    }

    expect(mergeObjectsWithSpread(obj1, obj2)).toEqual(result);
})

test('MergeWithSpread empty objects', () => {

    expect(mergeObjectsWithSpread({}, {})).toEqual({})
});

