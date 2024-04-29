const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("addTask");
taskBtn.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  let inputValue = taskInput.value.trim();
  if (inputValue !== "") {
    // task counter
    let taskCounter = parseInt(
      document.getElementById("taskAmount").textContent
    );
    let currentCounter = taskCounter + 1;
    document.getElementById("taskAmount").textContent = currentCounter;
    //  create li
    let listItem = document.createElement("li");
    listItem.textContent = inputValue;
    taskList.appendChild(listItem);
    //  create div for buttons
    let taskControl = document.createElement("div");
    taskControl.classList = "taskControl";
    listItem.appendChild(taskControl);
    // done button
    let doneBtn = document.createElement("img");
    doneBtn.src = "img/donepurple.svg";
    doneBtn.classList = "deleteBtn";
    doneBtn.addEventListener("click", function () {
      listItem.classList.toggle("donetasktext");
      doneBtn.style.fill = "green";
      if (doneBtn.src.match("img/donepurple.svg")) {
        doneBtn.src = "img/donegreen.svg";
      } else {
        doneBtn.src = "img/donepurple.svg";
      }
    });
    taskControl.appendChild(doneBtn);
    // remove button
    let removeBtn = document.createElement("img");
    removeBtn.src = "img/bin.svg";
    removeBtn.classList = "deleteBtn";
    removeBtn.addEventListener("click", function () {
      taskList.removeChild(listItem);
      let taskCounter = parseInt(
        document.getElementById("taskAmount").textContent
      );
      let currentCounter = taskCounter - 1;
      document.getElementById("taskAmount").textContent = currentCounter;
    });
    taskControl.appendChild(removeBtn);
  }
  taskInput.value = "";
});
