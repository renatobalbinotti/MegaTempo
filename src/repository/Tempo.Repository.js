class TempoRepository{
    constructor(){
        this.db = firebase.firestore();
    }

    create = (contato) => {
        return new Promise((resolve, reject) => {
            this.db.collection('contatos').add(contato).then(resultado => {
                resolve(resultado.id);
            }).catch(error => {
                reject('Erro ao enviar contato. '+ error)
            })
        })
    };
}