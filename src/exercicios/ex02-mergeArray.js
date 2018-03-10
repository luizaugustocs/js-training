// 2 - Criar uma função que receba 2 arrays como argumento e retorne um terceiro com os elementos dos dois arrays (sem utilizar o concat)


const mergeArrays = (obj1, obj2) => {

    const result = [];
    obj1.forEach(value => result.push(value));
    obj2.forEach(value => result.push(value));

    return result;

};

const mergeArraysWithSpread = (obj1, obj2) => [...obj1, ...obj2];

module.exports = {
    mergeArrays, mergeArraysWithSpread
};