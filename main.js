let globalId = 1;

function markAsDone(todoId) {
  const element = document.getElementById(todoId);
  element.children[2].innerHTML = "Done";
  setTimeout(() => {
    element.remove();
  }, 1000);
}

function createChild(title, description, todoId) {
  const child = document.createElement("div");
  const firstGrandChild = document.createElement("div");
  firstGrandChild.innerHTML = title;
  const secondGrandChild = document.createElement("div");
  secondGrandChild.innerHTML = description;
  const thirdGrandChild = document.createElement("button");
  thirdGrandChild.innerHTML = "Mark As Done";
  thirdGrandChild.setAttribute("onClick", `markAsDone(${todoId})`);
  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
  child.setAttribute("id", todoId);
  // firstGrandChild.innerHTML = "";
  // secondGrandChild.innerHTML = "";
  return child;
}

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const parent = document.getElementById("todos");

  parent.appendChild(createChild(title, description, globalId++));
}
