function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    var task = taskInput.value;
    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }
  
    var listItem = document.createElement("li");
    listItem.innerText = task;
  
    var closebtns = document.createElement("button");
    closebtns.innerHTML = `<i class='bx bx-message-rounded-x'></i>`;
    closebtns.style.backgroundColor='white';
    
    closebtns.addEventListener("click", function() {
      listItem.remove();
    });
  
    listItem.appendChild(closebtns);
    taskList.appendChild(listItem);
  
    taskInput.value = "";
  }
  