window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_element = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        //preventdefault prevents refreshing the page. It will not submit if the page keeps refreshing
        e.preventDefault();
        
        const task = input.value;
        
        //if there are no tasks submitted
        if (!task) {
            alert('Please fill out the things to do');
            return;
        } else {
            console.log(task);
            alert('Saved!')
        }

        //create dom nodes (elements) to which we can place on to the page (from the script)
        //the class names used should be the same as the ones in the HTML commented out
        const task_element = document.createElement('div');
        task_element.classList.add('task');
        
        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');

        //append task_content_element div (child) to the task_element div (parent) 
        task_element.appendChild(task_content_element);

        //creating the input element
        const task_input_element = document.createElement('input');
        task_input_element.classList.add('text');
        task_input_element.type = 'text';
        task_input_element.value = task;
        task_input_element.setAttribute('readonly', 'readonly');

        //append the input element to the content element
        task_content_element.appendChild(task_input_element);
        
        
        //creating a div for the "action" buttons edit and delete
        const task_actions_element = document.createElement('div');
        task_actions_element.classList.add('actions');

        //adding buttons to the task element
        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerHTML = 'Edit';

        const task_delete_element = document.createElement('button');
        task_delete_element.classList.add('delete');
        task_delete_element.innerHTML = 'Delete';

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);

        //append task_element div (child) to the list_element div (parent)
        list_element.appendChild(task_element);

        //every input that we write will be a new input with the help of the code below
        input.value = '';

        //tells what the edit button should do
        task_edit_element.addEventListener('click', () => {
            if(task_edit_element.innerText.toLowerCase() == 'edit') {
                task_input_element.removeAttribute('readonly');
                task_input_element.focus();
                task_edit_element.innerText = 'Save';
            } else {
                task_input_element.setAttribute('readonly', 'readonly');
                task_edit_element.innerText = 'Edit';
            }
        });

        task_delete_element.addEventListener('click', () => {
            //removes the specific div element
            list_element.removeChild(task_element);
        });
    });
});