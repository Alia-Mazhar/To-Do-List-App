document.querySelector('.push').onclick = function () {
    if (document.querySelector('.newtask #input').value.length === 0) {
        alert('Plese enter a task!!!')
    }
    else {
        document.querySelector('.tasks').innerHTML += `
            <div class='task'>    
                <span class='taskname'>
                    ${document.querySelector('.newtask #input').value}
                </span>
                <button class='delete'><i class="fa fa-trash-o"></i></button>
            </div>
        `
    }

    let current_task = document.querySelectorAll('.delete')
    for (let i=0; i<current_task.length; i++) {
        current_task[i].onclick = function() {
            this.parentNode.remove()
        }
    }

    let task = document.querySelectorAll('.task')
    for(let i=0; i<task.length; i++) {
        task[i].onclick = function() {
            this.classList.toggle('task-completed')
        }
    }

    document.querySelector('.newtask #input').value=''
}