window.addEventListener('load', () => {
    
    var new_task = document.getElementById('new-task');
    var add_task = document.getElementById('add-task');
    var tasks = document.getElementById('tasks');

    add_task.addEventListener('click', (e)=>{
        e.preventDefault();
        const task = new_task.value;
        if(new_task.value===""){
            return alert("task is empty,please fill");
        }

        let adddiv = document.createElement('div');
        adddiv.classList.add('task');

        const addcontent = document.createElement('div');
        addcontent.classList.add('content');
        adddiv.appendChild(addcontent);

        const task_input = document.createElement('input');
        task_input.classList.add('add_text');
        task_input.type = 'text';
        task_input.value = task;
        task_input.setAttribute('readonly' , 'readonly');
        addcontent.appendChild(task_input);

        const addactions = document.createElement('div');
        addactions.classList.add('actions');

        
        const task_edit = document.createElement('button');
        task_edit.classList.add('edit');
        task_edit.innerText = 'Edit';
        
        const task_delete = document.createElement('button');
        task_delete.classList.add('delete');
        task_delete.innerText = 'Delete';

        addactions.appendChild(task_edit);
        addactions.appendChild(task_delete);

        adddiv.appendChild(addactions);
        tasks.appendChild(adddiv);

        new_task.value = '';

        task_edit.addEventListener('click', (e) => {
            if (task_edit.innerText.toLowerCase()=="edit") {
                task_edit.innerText = "Save";
                task_edit.removeAttribute("readonly");
                task_edit.focus();
            }
            else {
                task_edit.innerText = "Edit";
                task_edit.setAttribute("readonly","readonly");
            }
        });
        task_delete.addEventListener('click', (e) => {
            tasks.removeChild(adddiv);
        });

    });
});
