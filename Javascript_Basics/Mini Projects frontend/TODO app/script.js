// function loadTodos(){
//     const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList":[]};
//     console.log(todos);
//     return todos;
// }

// function addToLocalStorage(todo){
//     const todos = loadTodos();
//     todos.todoList.push(todo);
//     localStorage.setItem("todos",JSON.stringify(todos));

// }

// function executeFilterAction(event){
//     const todoList = document.getElementById("todoList");
//     const element = event.target;
//     const value = element.getAttribute("data-filter");
//     todoList.innerHTML = '';
//     const todos = loadTodos();
//     if(value == "all"){
//         console.log(todoList);
//         todos.todoList.forEach(todo => {
//         appendTodoInHtml(todo);
//     })   
//     }else if(value == "pending"){
//         todos.todoList.forEach(todo => {
//         if(todo.isCompleted !== true)
//         appendTodoInHtml(todo);
//     })
//     }else{
//         todos.todoList.forEach(todo => {
//         if(todo.isCompleted === true)
//         appendTodoInHtml(todo);
//     })
//     }
// }


// function appendTodoInHtml(todo){
//     const todoList = document.getElementById("todoList");

//     const todoItem = document.createElement("li");
//     const textDiv = document.createElement("div");

//     textDiv.textContent = todo.text;
//     todoItem.classList.add("todoItem");

//     const wrapper = document.createElement("div");
//     wrapper.classList.add("todoButtons");

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.classList.add("editBtn");

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("deleteBtn");

//     const completedBtn = document.createElement("button");
//     completedBtn.textContent = "Completed";
//     completedBtn.classList.add("completedBtn");

//     wrapper.appendChild(editBtn);
//     wrapper.appendChild(deleteBtn);
//     wrapper.appendChild(completedBtn);

//     todoItem.appendChild(textDiv);
//     todoItem.appendChild(wrapper);

//     todoList.appendChild(todoItem);
    
// }

// document.addEventListener("DOMContentLoaded",() => {

//     const todoInput = document.getElementById("todoInput");

//     const submitButton = document.getElementById("addtodo");

//     const todoList = document.getElementById("todoList");

//     const filterBtns = document.getElementsByClassName("filterbutton");
//     for(const btn of filterBtns){
//         ImageBitmap.addEventListener("click",executeFilterAction)
//     }
    

//     submitButton.addEventListener("click",(event)=>{
//         const todoText = todoInput.value;
//         if(todoText == ''){
//             alert("Please write something for the todo");
//         }
//         else{
//             addToLocalStorage({text:todoText,isCompleted:false});
//             appendTodoInHtml({text:todoText,isCompleted:false});
//             todoInput.value = "";
//         }
//     })

//     todoInput.addEventListener("change",(event)=>{
//         // console.log("Something changed",event.target.value)

//         const todoText = event.target.value;
//         event.target.value = todoText.trim();
//         console.log(event.target.value);
//     })
//     const todos = loadTodos();

//     todos.todoList.forEach(todo => {
//         appendTodoInHtml(todo);
//     })
// });


function loadTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos(filter = "all") {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    let todos = loadTodos();

    if (filter === "completed") {
        todos = todos.filter(t => t.isCompleted);
    } else if (filter === "pending") {
        todos = todos.filter(t => !t.isCompleted);
    }

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = `todoItem ${todo.isCompleted ? "completed" : ""}`;

        const text = document.createElement("span");
        text.textContent = todo.text;
        text.className = "text";

        const btns = document.createElement("div");
        btns.className = "todoButtons";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✓";
        completeBtn.className = "completeBtn";
        completeBtn.onclick = () => toggleComplete(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = () => deleteTodo(index);

        btns.append(completeBtn, deleteBtn);
        li.append(text, btns);
        list.appendChild(li);
    });
}

function addTodo(text) {
    const todos = loadTodos();
    todos.push({ text, isCompleted: false });
    saveTodos(todos);
    renderTodos();
}

function deleteTodo(index) {
    const todos = loadTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
}

function toggleComplete(index) {
    const todos = loadTodos();
    todos[index].isCompleted = !todos[index].isCompleted;
    saveTodos(todos);
    renderTodos();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addtodo").onclick = () => {
        const input = document.getElementById("todoInput");
        if (!input.value.trim()) return;
        addTodo(input.value.trim());
        input.value = "";
    };

    document.querySelectorAll(".filterbutton").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".filterbutton").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderTodos(btn.dataset.filter);
        };
    });

    renderTodos();
});
