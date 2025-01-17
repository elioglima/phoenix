const libObj = require('../../../../libs/fn_obj')

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let RetornoClient = libObj.Assign(require('../../../modules/ModeloRetornoClient'))        
        const ModelCadatro = libObj.Assign(require('../ModelCadastro'))

        ModelCadatro['Metodo'] = ''
        let r = libObj.Parse(req, ModelCadatro)
        
        if (!r.Nome) {
            RetornoClient.Erro = true
            RetornoClient.Mensagem = "Informe :: (Nome)"
            return reject(RetornoClient)
        } 
        
        RetornoClient.Erro = false
        RetornoClient.Mensagem = "Sucesso"
        RetornoClient.Response = r
        return resolve(RetornoClient)
    });
  }
  