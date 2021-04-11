const input=document.querySelector('#todo');
const ul=document.querySelector('#todo-ul');
function write_todo(e){
    if(input.value=="")
        alert('scrivi qualcosa');
    //creo li, gli do una classe e inserisco testo da input
    const li=document.createElement('li');
    li.className='todo-li';
    li.appendChild(document.createTextNode(input.value));
    //creo pulsante per eliminazione, do classe e lo inserisco in li
    const buttonDelete=document.createElement('button');
    buttonDelete.className='delete-todo';
    buttonDelete.innerHTML='X';
    //inserisco il bottone in li e tutto in ul
    li.appendChild(buttonDelete);
    ul.appendChild(li);
    e.preventDefault();
}rite_to
