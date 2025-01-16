$(document).ready(function(){
    $('#botao-adicionar').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form input').val('');
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        addTask();
    })      

        function addTask() { 
            const taskInput = document.getElementById('nome-tarefa'); 
            const taskList = document.getElementById('lista-tarefas'); 
            const newTask = document.createElement('li'); 
            newTask.textContent = taskInput.value; 
            newTask.onclick = function() { 
                this.classList.toggle('completed'); 
            }
            taskList.appendChild(newTask); 
            taskInput.value = ''; 
}});