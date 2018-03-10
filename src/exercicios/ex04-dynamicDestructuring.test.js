const {dynamicDestructuring, dynamicDestructuringRecursivo} = require('./ex04-dynamicDestructuring');
test('dynamic destructor', () => {

    const obj = {
        id: 1,
        nome: 'teste',
        contato: {
            email: 'a@a',
            celular: '12345',
            fixo: '9876'
        }
    };


    const result = dynamicDestructuring(obj, ['id', 'contato']);

    expect(result).toEqual([1, {
        email: 'a@a',
        celular: '12345',
        fixo: '9876'
    }])

})

test('dynamic destructor Recursivo', () => {

    const obj = {
        id: 1,
        nome: 'teste',
        contato: {
            email: 'a@a',
            celular: '12345',
            fixo: '9876'
        }
    };


    const result = dynamicDestructuringRecursivo(obj, ['id', 'contato.email']);

    expect(result).toEqual([1, 'a@a'])

})

test('dynamic destructor Recursivo2', () => {

    const obj = {
        id: 1,
        nome: 'teste',
        contato: {
            email: 'a@a',
            telefone: {
                celular: '12345',
                fixo: '9876'
            }
        }
    };


    const result = dynamicDestructuringRecursivo(obj, ['id', 'contato.telefone.celular']);

    expect(result).toEqual([1, '12345'])

})