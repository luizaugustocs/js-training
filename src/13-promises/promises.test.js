import { promiseDef, simplePromise, fakePromiseAPI } from './promises';

test('promises def', () => {

    expect(promiseDef).toBeDefined();
    expect(promiseDef.definicoes[0]).toEqual('#mozilla =>A Promise is an object representing the eventual completion or failure of an asynchronous operation');
    expect(promiseDef.definicoes[1]).toEqual('#eduardo => Simboliza algo que vai acontecer no futuro, porém isso pode dar certo ou não');

    expect(promiseDef.vantagens[0]).toEqual('O encadeamento é garantido pelo tipo, e não por callbacks');
    expect(promiseDef.vantagens[1]).toEqual('Tratamento de erros simplificado');
    expect(promiseDef.vantagens[2]).toEqual('Mais fácil de ler e manter o código');
    expect(promiseDef.vantagens[3]).toEqual('Favorece composição do seu código #não garante');

    expect(promiseDef.desvantagens[0]).toEqual('Retorna somente um valor e o seu ciclo de vida acaba (RxJS)');
    expect(promiseDef.desvantagens[1]).toEqual('Não é cancelável (RxJS)');

    expect(promiseDef.observacoes[0]).toEqual('Normalmente nós somos consumidores das promises (fetch, jQuery, middlewares, etc)');
});

/**
 * Fazer junto
 */
test('simple promise chaining', (done) => {

    simplePromise(true)
        .then((value) => console.log(value))
        .then(() => done());
});

/**
 * Fazer junto
 */
test('simple promise error catching chaining', (done) => {

    simplePromise()
        .then((value => console.log(value)))
        .catch(error => console.log(error))
        .then(() => done());
});

/**
 * Exercício 3
 *
 * Refatorar o exercício dos callbacks (#2) para utilizar Promises conforme exemplo mostrado anteriormente
 */
test('refactoring callback exercise', () => {

    const url = '/jstraining/api/#onomedasuaapi';
    const urlError = '/api/error';

    const onSuccess = (data)=> {
        console.log(`Sucesso: ${JSON.stringify(data)}`);
        expect(data).toEqual({status: 200, data: {success: true}});
    };

    const onError = (error) => {
        console.log(`Error: ${error}`)
        expect(error).toEqual(`Invalid url ${urlError}`);
    };

    fakePromiseAPI(url)
        .then(onSuccess)
        .then(() => fakePromiseAPI(urlError))
        .catch(onError);
});

/**
 * Exercício 4
 *
 * Refatorar o exercício do encadeamento dos callbacks para utilizar o encadeamento das promises.
 */
test('refactoring callback chaining promises', (done) => {

    simplePromise({a: 1})
        .then((firstValue) => {
            console.log(`FirstValue: ${JSON.stringify(firstValue)}`);
            return {... firstValue, b: 2}
        })
        .then((secondValue) => {
            console.log(`SecondValue: ${JSON.stringify(secondValue)}`);
            return {... secondValue, c:3}
        })
        .then((thirdValue) => {
            console.log(`ThirdValue: ${JSON.stringify(thirdValue)}`)
        })
        .then(()=> done())

});