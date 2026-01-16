function Salvar(novaLista){ //salvar nova lista de frases
    localStorage.setItem('listaDeFrases',JSON.stringify(novaLista))
}
function Ler(){ //ler a lista de frases
    return JSON.parse(localStorage.getItem('listaDeFrases'))
}
function Verificar(){ //verificar se é o primeiro acesso do usuario
    if(localStorage.getItem('listaDeFrases')==0 || localStorage.getItem('listaDeFrases')==undefined){
        const listaDeFrases = ["Pela janela, o céu foi vislumbrado","Porém, para chegar ao sonho, lutar era necessário","Lutar pelo céu longínquo parecia uma loucura","Mas só se vive uma vez","Missão dada é missão cumprida","O esforço imensurável foi recompensado","Fantasias se tornam realidade","Bixetes, agora fazem parte de mais uma família","Futuras engenheiras do ITA","Reciprocidade e irmandade lhes aguardam","Sejam bem-vindas a eterna T30"];
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






