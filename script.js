function Salvar(novaLista){ //salvar nova lista de frases
    localStorage.setItem('listaDeFrases',JSON.stringify(novaLista))
}
function Ler(){ //ler a lista de frases
    return JSON.parse(localStorage.getItem('listaDeFrases'))
}
function Verificar(){ //verificar se é o primeiro acesso do usuario
    if(localStorage.getItem('listaDeFrases')==0 || localStorage.getItem('listaDeFrases')==undefined){
        const listaDeFrases = ["O ITA cresce com você.","Você pertence ao futuro da engenharia.","Você pode fazer história.","Você faz parte do amanhã.","Você constrói seu próprio caminho.","Você inspira pelo exemplo.","Você tem muito a conquistar.","Você ajuda a construir isso.","Você merece igualdade.","Você merece ser ouvida.","Você é resiliente.","Você é persistente.","Aprender é um processo.","Você se adapta e cresce.","Você não desistiu — e isso importa.","Resistir também é avançar.","Você está em constante evolução.","Crescer envolve dificuldade.","Nem todo dia será fácil — e tudo bem.","Tecnologia se constrói em conjunto.","Ideias diferentes criam soluções melhores.","Você participa da construção do futuro.","Sistemas complexos precisam de equilíbrio.","Engenharia precisa de múltiplas perspectivas.","Você constrói soluções.","Sua capacidade não precisa ser provada todos os dias.","Você é parte da história do ITA.","Pertencer não é pedir permissão.","Seu espaço aqui é legítimo."];
        Salvar(listaDeFrases)
    }
}
function Mudar(){
    lista=Ler()
    let index;
    tamanho=lista.length
    if(document.querySelector('img').classList[0]=='d'){
        document.querySelector('img').classList.add('l')
        document.querySelector('img').classList.remove('d')
        document.querySelector('.msg').style.visibility='visible'
    }
    if(tamanho==0){
        document.querySelector('.msg').innerText='Acabaram suas mensagens únicas'
        return
    }
    index=(Math.floor(Math.random()*(tamanho)))
    document.querySelector('.msg').innerText=lista[index]
    lista.splice(index-1,1)
    Salvar(lista)
}
Verificar()
document.querySelector('img').addEventListener('click',Mudar)





