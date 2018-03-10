
export const callbackDef = {
    definicoes: [
        'Função que será chamada quando algo vai acontecer',
        '#Chamada não atendida',
        ''
    ],
    vantagens: [
        '????'
    ],
    desvantagens: [
        'Não é garantido por tipo',
        'Encadeamento complexo e difícil de ler e manter conforme o código for evoluindo',
        'Não garante o tratamento de erros'
    ]
};

export const simpleCallback = (callback = () => 'Empty callback') => {

    return callback('My first callback');
};


export const fakeCallApi = (url, success, error) => {

    if (url === '/jstraining/api/#onomedasuaapi') {
        success({status: 200, data: {success: true}})
    } else {
        error(`Invalid url ${url}`);
    }
};