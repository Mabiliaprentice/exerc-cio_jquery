$(document).ready(function() {
    $("form").on("submit", function (e) {
        e.preventDefault();
        const insiraNovatarefa = $('#form-envio').val();


    const tarefaExiste = $("ul li").toArray().some((li) => $(li).text() === insiraNovatarefa);
        if (tarefaExiste) {
    alert('Esta tarefa já existe na lista.');
        $(`#form-envio`).val('')
    return;
    }

    const novaTarefa = $('<li class="has-maker"></li>');
    $(`<li>${insiraNovatarefa}</li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $(`#form-envio`).val('')
    });

    $('ul').on('click', 'li', function (){
        $(this).toggleClass('strike-through');
    });


}); 