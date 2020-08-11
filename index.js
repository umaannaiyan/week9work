// class task{
//   constructor(taskId, name, descrip, assign, stat, date){
//     this.taskId = taskId,
//     this.name = name,
//     this.descrip = discrip,
//     this.assign = assign,
//     this.stat = stat,
//     this.date =date
//   }
//   addtask(){
//     const tk1= new task()
//     return `${this.taskID}, ${this.name}, ${this.descrip}, ${this.assign}, ${this.stat}, ${this.date}`;
//   }
//   }
class taskManager{
  constructor(){
    let task = [];
    let currentId = 1;
  }


}

const addBtn= document.querySelector("#addBtn");
addBtn.addEventListener("click", addBtnClicked);

const taskForm=document.querySelector("#task-form");
taskForm.addEventListener("click",taskFormSubmitted);

const modalElement = document.querySelector("task-modal");

const taskName = document.querySelector("#taskName");
taskName.addEventListener("change", onInputChange);

const assignee = document.querySelector("#assignee");
assignee.addEventListener("change", onInputChange);

const description = document.querySelector("#description");
description.addEventListener("change", onInputChange);

const status = document.querySelector("#status");
status.addEventListener("change", onInputChange);

const taskDate = document.querySelector("#taskDate");
taskDate.addEventListener("change", onInputChange);

function addBtnClicked(event){
  checkValidation();
  emptyForm();
  $("#staticBackdrop").modal("show");
}


function emptyForm(){
  taskId.value = null;
  taskName.value=null;
  assignee.value=null;
  description.value=null;
  status.value=null;
  taskDate.value="To Do";
}

taskName.addEventListener("input",function(event){
  if (event.target.value && event.target.value.length >= 3) {
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
  } else {
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
  }
  });

description.addEventListener("input",function(event){
  if (event.target.value && event.target.value.length >= 15) {
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
  } else {
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
  }
  });

  assignee.addEventListener("input",function(event){
    if (event.target.value && event.target.value.length >= 3) {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
    } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
    }
    });
    taskDate.addEventListener("input",function(event){
      if (event.target.value < ) {
          event.target.classList.remove("is-invalid");
          event.target.classList.add("is-valid");
      } else {
          event.target.classList.remove("is-valid");
          event.target.classList.add("is-invalid");
      }
      });



function onInputChange(event){
  checkInput(event.target);
}

function checkInput(inputElement){
  if(inputElement.value){
    inputElement.classList.remove("is-invalid");
    inputElement.classList.add("is-valid");
    return true;
  }
  else{
    inputElement.classList.remove("is-valid");
    inputElement.classList.add("is-invalid");
    return false;
  }
}

// Creating Task and checking the value

var task = [
];

function addBtnClicked(event){
  event.preventDefault();
  if(
    checkInput(taskName) &
    checkInput(assignee) &
    checkInput(description) &
    checkInput(status) &
    checkInput(taskDate) != null )
      {
        createtaskId(  );
        addTask(
          tId.value,
          taskName.value,
          description.value,
          assignee.value,
          taskDate.value,
          status.value
        );
  }
 }

 function createtaskId()




const btnSave=document.querySelector("#btnSave");
