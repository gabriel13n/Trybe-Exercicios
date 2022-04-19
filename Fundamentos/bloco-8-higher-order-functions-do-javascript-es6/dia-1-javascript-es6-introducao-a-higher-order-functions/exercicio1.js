const newEmployees = (dadosEmployes) => {
  const employees = {
    id1: dadosEmployes('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dadosEmployes('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dadosEmployes('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const dadosEmployes = (nomeCompleto) => {
  let emailFormatado = `${nomeCompleto.replace(' ', '_')}@trybe.com`;
  return {
    nome: nomeCompleto,
    email: emailFormatado
  }
}

console.log(newEmployees(dadosEmployes));

