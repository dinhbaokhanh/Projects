document.querySelector("#addButton").onclick = function() {
    if(document.querySelector('#addTask input').value.length == 0) {
        alert("Are you be LAZY ?? Enter a TASK")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#addTask input').value}
                </span>
                <a class="delete"> Delete </a>
            </div>
        `;
        localStorage.setItem('task', JSON.stringify(document.querySelector('#addTask input').value));
        var current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

var list = document.querySelector('#tasks');
list.addEventListener('click', function(event) {
    if(event.target.tagName === 'SPAN') {
        event.target.classList.toggle('done');
    }
});