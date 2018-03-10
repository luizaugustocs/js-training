

const nome = 'Anakin';
const raca = 'Poodle';

const literal = {
    nome: nome,
    raca: raca
};

const property = {};
property.nome = nome;
property.raca = raca;

const propertyKey = {};

propertyKey['nome'] = nome;
propertyKey['raca'] = raca;


const concise = {nome, raca};

module.exports = {literal, property, propertyKey, concise};