const todo = document.getElementById("InputText");
const submit = document.getElementById("submit");
let list = document.querySelector('.listUl');
const delBtn = document.getElementsByClassName('delBtn')


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (todo.value != "") {
        const li = document.createElement('li');
        const delBtn = document.createElement('button')
        // delBtn.innerText = 'Delete'
        delBtn.innerHTML = '<img src="/images/Thrash.png" alt="Trash" height="25px" width="auto" >'
        delBtn.classList.add('delBtn');
        delBtn.addEventListener('click', (e) => {
            if (confirm('Are you sure?')) {
                li.remove();
            }
        });
        li.classList.add("li-element");
        li.innerText = todo.value;

        li.appendChild(delBtn);
        list.appendChild(li);
    }
});