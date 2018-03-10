
test('Destructuring geo object', () => {


    const bairro = {
        id: 1,
        descricao: 'Zona 07',
        feature: {
            id: 10,
            bairro: 1,
            center: [1, 2, 3, 4]
        }
    };

    const quadra = {
        id: 2,
        descricao: '5',
        feature: {
            id: 12,
            quadra: 2,
            center: [0,0,0,0]
        },
        bairro
    }

    const {feature: {id: featureQuadraid},
        bairro: {feature: {id: bairroQuadraId}}} = quadra

    expect(featureQuadraid).toEqual(12);
    expect(bairroQuadraId).toEqual(10);
})