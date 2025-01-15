$(document).ready(function(){
    $('#botao-adicionar').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form input').val('');
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li style="display: none"></li>');
        novoItem.text(enderecoDaNovaTarefa);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
    });
});

