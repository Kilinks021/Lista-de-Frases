var index=0
function Mudar(){
    const listaDeFrases = ["Pela janela, o céu foi vislumbrado","Porém, para chegar ao sonho, lutar era necessário","Lutar pelo céu longínquo parecia uma loucura","Yet you only live once","Missão dada é missão cumprida","O esforço imensurável foi recompensado","Fantasias se tornam realidade","Bixetes, agora fazem parte de mais uma família","Futuras engenheiras do ITA","Reciprocidade e irmandade lhes aguardam","Sejam bem-vindas a eterna T30","----------------"];
    if(document.querySelector('img').classList[0]=='d'){
        document.querySelector('img').classList.add('l')
        document.querySelector('img').classList.remove('d')
        document.querySelector('.msg').style.visibility='visible'
    }
    document.querySelector('.msg').innerText=listaDeFrases[index%12]
    index+=1
}
document.querySelector('img').addEventListener('click',Mudar)

