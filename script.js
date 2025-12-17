function enviarMensagem(event){

    event.preventDefault();

    const nome= document.getElementById('nome').value;
    const mensagem= document.getElementById('mensagem').value;
    const telefone= '5579988732159'

    const texto= `Olá! Meu nome é ${nome}. ${mensagem}`;

    const mensagemWhatsapp= encodeURIComponent(texto); 

    const url= `https://whatsa.me/${telefone}/?t=${mensagemWhatsapp}`;

    window.open(url, '_blank');
}