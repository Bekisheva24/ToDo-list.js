const form = document.querySelector(".form");
const input = document.querySelector("#input-todo");
const button = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");

form.addEventListener('submit', function (event) {
	event.preventDefault();
});

button.addEventListener("click", function () {
	if (input.value == "") {
		alert('Add your task');
	} else {
		const todo = document.createElement("div");
		todo.classList.add("todo-item");
		todo.style.width = "300px";
		todo.style.marginBottom = "10px";
		todo.style.padding = "10px";
		todo.style.backgroundColor = "rgb(131 124 124 / 27%)";
		todo.style.borderRadius = "5px";

		todoList.appendChild(todo);
		todo.innerHTML = input.value;
		input.value = "";

		todo.addEventListener("click", function () {
			todo.remove();
		});
	}
});