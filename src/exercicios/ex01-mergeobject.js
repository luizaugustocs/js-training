//  1 - Criar uma função que receba como argumento dois objetos e retorne um terceiro objeto que contenha


const mergeObjects = (obj1, obj2) => {

    const result = {};
    Object.keys(obj1)
        .forEach(key => {
            result[key] = obj1[key]
        });
    Object.keys(obj2)
        .forEach(key => result[key] = obj2[key]);

    return result;

};

const mergeObjectsWithAssign = (obj1, obj2) => Object.assign({}, obj1, obj2);

const mergeObjectsWithSpread = (obj1, obj2) => {
    return {...obj1, ...obj2}
};

module.exports = {
    mergeObjects, mergeObjectsWithAssign, mergeObjectsWithSpread
};