const DBUsuario = require('../../../../db/models/Usuarios')
const libObj = require('../../../../libs/fn_obj')

module.exports = async (Dados) => {
  let RetornoClient = libObj.Assign(require('../../../modules/ModeloRetornoClient'))
  let ModelCadastro = libObj.Assign(require('../ModelCadastro'))
  const { retorno } = await DBUsuario.Todos(Dados)
  let Registros = libObj.Parse(retorno, ModelCadastro)
  
  RetornoClient.Mensagem = 'Nenhum resultado localizado'
  RetornoClient.Response = {
    TotalRegistros: 0,
    Registros: [],
  }
  
  if (!Registros)
  return RetornoReponse
  
  RetornoClient.Mensagem = 'Consulta bem sucedida'
  RetornoClient.Response = {
    TotalRegistros: Registros.length,
    Registros: Registros,
  }
  
  return RetornoClient
}