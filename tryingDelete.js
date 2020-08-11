class Task{
    constructor(taskId, name, descrip, assign, stat, date){
        this.taskId = taskId,
        this.name = name,
        this.descrip = descrip,
        this.assign = assign,
        this.stat = stat,
        this.date =date
    }
    //   addPreLoadedTask(){
    //     return `${this.taskId}, ${this.name}, ${this.descrip}, ${this.assign}, ${this.stat}, ${this.date}`;
    //   }
      
    addToHTML()
    {   
        console.log(this.taskId);
       const addHtml = `
        <div  class="itemBox" id="${this.taskId}" class="list-group" >
            <a id= "anchor" href="#" class="list-group-item list-group-item-action "  >
                <div id = "taskNameTag" class="d-flex w-100 justify-content-between style="background-color: rgb(159, 133, 159)">
                    <h5 id="h5" class="mb-1">${this.name}</h5>
                </div>
                <p class="mb-1"><small>${this.descrip}</small></p>
                <small class= "text-muted">
                    Due by ${this.date}    ${this.assign}   <span style="${this.stat === "To Do" ? "color: green": "color:red"}">    ${this.stat} </span>   
                </small>
            </a>  
            <button class="delete btn btn-danger btn-sm" id="btnDelete" onclick= "deleteButtonClicked()" name="button${this.taskId}" style = "background-color: gainsboro;color: red; border-color:gainsboro;">      
            X</button>
        </div>
    `;
    const listGroupContainer = document.querySelector("#listGroupContainer");
    listGroupContainer.innerHTML += addHtml;
    // alert("I am Calling createElement");
    
    createElement(addHtml);
    }
  
}
class TaskManager{
    constructor(task){
          this.task = task;
          this.id = 0;
          this.taskList = [];
              
    }

    addTask(name,descrip,assign,stat,date){
        const task = new Task(
                 `task${this.id++}`,
                 name,
                 descrip,
                 assign,
                 stat,
                 date);
                 this.taskList.push(task); 
                 console.log(this.taskList, "TaskList");
                 this.displayTask();
                //  this.addToStorage();
                //  task.addToHTML(task);   
                                      
    }
    displayTask(){

        const listGroupContainer = document.querySelector("#listGroupContainer");
        listGroupContainer.innerHTML="";
        for(let i=0; i< this.taskList.length;i++)
        {   
            const task = new Task(
                this.taskList[i].taskId,
                this.taskList[i].name,
                this.taskList[i].descrip,
                this.taskList[i].assign,
                this.taskList[i].name,         
                this.taskList[i].date);
            console.log(this.taskList[i]);
            console.log(this.taskList[i].taskId);
         
            const taskElement=task.addToHTML();
        }
    }

    getAllTasks(){
            return this.taskList;
    }
   
    deleteTask(taskId){

            alert("I am  into Delete Task");
            
    }
    updateTask(taskId,name,descrip,assign,stat,date){}
    assignTask(taskId, assign){}
}

    
// document.addEventListener('DOMContentLoaded', function(){


//MODAL Form Elements Initialising
const taskName=document.querySelector("#taskName");
const description=document.querySelector("#description");
const assignee=document.querySelector("#assignee");
const taskDate=document.querySelector("#taskDate");
const status=document.querySelector("#status");

//Modal and Form Buttons 
const taskModal=document.querySelector("#task-modal");
const btnSave=document.querySelector("#btnSave");
const btnReset=document.querySelector("#btnReset");
const btnClose=document.querySelector("#btnClose");

// Add, Edit and Delete Buttons on PAGE
const btnAdd=document.querySelector("#btnSave");
const btnEdit=document.querySelector("#btnEdit");


const listGroupContainer=document.querySelector("#listGroupContainer");

var taskNameEvent = new Boolean(true);
var assigneeEvent = new Boolean(true);
var descriptionEvent = new Boolean(true);
var statusEvent = new Boolean(true);
var dateEvent = new Boolean(true);

    // Initialising(creating instances) classes
    const task = new Task();
    const taskManager = new TaskManager();



btnSave.addEventListener("click",function(event){
    if(taskNameEvent && assigneeEvent && descriptionEvent && statusEvent){
        
        taskManager.addTask(taskName.value, description.value, assignee.value, status.value, taskDate.value);
        
        clearAll();
        $('#staticBackdrop').modal("hide");   
        return true;        
    }
    else{
        return false;
    }
});

function createElement(addHtml){
    // alert("I am into Create Element");
    const element = document.createRange().createContextualFragment(addHtml);
    // const itemBox = document.querySelector("#itemBox");
    const btnDelete=document.querySelector(".delete");
    console.log(btnDelete);
    // alert("I have create BtnDelete", btnDelete);
    
}

function deleteButtonClicked()
{

    // alert("I am Mr. Delete, and I am Clicked");
    
    btnDelete=document.querySelector("button.delete");
            
    btnDelete.addEventListener("click", function(event) {
            alert("I am inside Delete Task");
            const taskElement = event.target.closest(".itemBox");
            console.log(taskElement);
            const taskManager = new TaskManager();
            taskManager.taskList=taskManager.taskList.filter(m => m.taskId != taskElement.id);
            taskManager.displayTask();
            console.log(taskManager.taskList);

            

            // const listGroupContainer = document.querySelector("#listGroupContainer");
            // listGroupContainer.removeChild(itemBox);
    });        
}

    
    




function clearAll(){

    taskName.value=null;
    description.value=null;
    assignee.value=null;
    taskDate.value=null;
    status.value=null;

     taskName.classList.remove("is-valid", "is-valid");
     description.classList.remove("is-valid", "is-valid");
     assignee.classList.remove("is-valid", "is-valid");
     status.classList.remove("is-valid", "is-valid");
     taskDate.classList.remove("is-valid", "is-valid");

}

//Task form validation  Begins here
taskName.addEventListener("input",function(event){
        if (event.target.value && event.target.value.length >= 3) {
            event.target.classList.remove("is-invalid");
            event.target.classList.add("is-valid");
            
            taskNameEvent= true;         
        } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
        taskNameEvent= false;
        }
    });
   
assignee.addEventListener("input",function(event){
        if (event.target.value && event.target.value.length >= 3) {
            event.target.classList.remove("is-invalid");
            event.target.classList.add("is-valid");
            assigneeEvent= true;
        } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
        assigneeEvent = false;
        }
    });
description.addEventListener("input",function(event){
        if (event.target.value && event.target.value.length >= 3) {
            event.target.classList.remove("is-invalid");
            event.target.classList.add("is-valid");
            descriptionEvent=true;
        } else {
            event.target.classList.remove("is-valid");
            event.target.classList.add("is-invalid");
            descriptionEvent=false;
        }
    });

status.addEventListener("input",function(event){
        if (event.target.value ) {
            event.target.classList.remove("is-invalid");
            event.target.classList.add("is-valid");
            statusEvent=true;
        } else {
            event.target.classList.remove("is-valid");
            event.target.classList.add("is-invalid");
            statusEvent=false;
        }
    });
    taskDate.addEventListener("input",function(event){
        if (event.target.value ) {
            event.target.classList.remove("is-invalid");
            event.target.classList.add("is-valid");
            statusEvent=true;
        } else {
            event.target.classList.remove("is-valid");
            event.target.classList.add("is-invalid");
            statusEvent=false;
        }
    });

 
 ///Task Form Validation Ends here

 

// }); 