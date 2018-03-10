


export const dynamicDestructuring = (object, fields) => {
    return fields.map(field => object[field]);

};

export const dynamicDestructuringRecursivo = (object, fields) => {
    return fields.map(field => {
        if (field.includes('.')) {
            const [currentField, ...nextFields] = field.split('.');
            const [recursiveResult] = dynamicDestructuringRecursivo(object[currentField], [nextFields.join('.')]);
            return recursiveResult;
        } else {
            return object[field]
        }
    })
};
