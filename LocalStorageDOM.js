class Task{
    constructor(taskId, name, descrip, assign, stat, date){
        this.taskId = taskId,
        this.name = name,
        this.descrip = descrip,
        this.assign = assign,
        this.stat = stat,
        this.date =date
    }
    addToHTML(task){
        const addHtml = `
        <div id=" ${this.taskId}"class="list-group" >
            <a href="#" class="list-group-item list-group-item-action "  >
                <div class="d-flex w-100 justify-content-between style="background-color: rgb(159, 133, 159)">
                    <h5 class="mb-1">${this.name}</h5>
                    <small></small> 
                    <button class="btn btn-danger btn-sm" id="btnDelete" style = "background-color: gainsboro;color: red; border-color:gainsboro;">
                    X</button>
                </div>
                  <p class="mb-1"><small>${this.descrip}</small></p>
                  <small class= "text-muted">
                    Due by ${this.date}    ${this.assign}   <span style="${this.stat === "To Do" ? "color: green": "color:red"}">    ${this.stat} </span>   
                  </small>
            </a>        
        </div>
    `;
     
        const listGroupContainer = document.querySelector("#listGroupContainer");
        listGroupContainer.innerHTML += addHtml;
    }

}
class TaskManager{
    constructor(allTask){
          this.allTask = [];
          this.stringy;
          this.currentId= 1;
           
    }
    retreiveFromStorage(){
        const taskObj = JSON.parse(localStorage.getItem("Mundiri")) || [];
        this.allTask = taskObj.map(
            (tsk) => new Task(
                tsk.id,
                tsk.name,
                tsk.description,
                tsk.assignee,
                tsk.status,
                tsk.date
            )
        );
        this.currentId = parseInt(localStorage.getItem("currentId")) || 1;
    }

    addToStorage(){
            localStorage.setItem("Mundiri", JSON.stringify(this.allTask));
            localStorage.setItem("currentId", this.currentId);
    }

    addTask(name,descrip,assignee,status,date){
           const task = new Task(
                    `task${this.currentId++}`,
                    name,
                    descrip,
                    assignee,
                    status,
                    date);
                    this.allTask.push(task); 
                    this.addToStorage();
                    task.addToHTML(task);   
                    // this.displayList();                       
    }
    displayList(){
        const task = new Task();
        // this.allTask.forEach((task) => {
        //     const tkEle =task.addToHTML();
        //     tkEle.querySelector("button.btnDelete")
        //         .addEventListener("click",(event) => this.deleteTaskclicked(event));
        // });

        // for(i=0;i< this.allTask.length;i++){
            // task.addToHTML(this.allTask[i]);
            const tkEle =task.addToHTML(this.allTask);
            delEle=tkEle.querySelector("button.btnDelete")
            delEle.addEventListener("click",(event) => this.deleteTaskclicked(event));
        // }
    }
    deleteTask(elementId){
        this.allTask = this.allTask.filter((task) => task.id !== elementId);
        // this.displayList();
    }

    
    deleteTaskclicked(event){
        const btnDel = event.target;
        const taskElement = btnDel.closest(".task");
        console.log(taskElement);

    // // const task = this.allTask.find(t) => taskElement.id === t.id);
    // taskManager.deleteTask(taskElement);
    }

}

document.addEventListener('DOMContentLoaded', function(){


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
    const btnDelete=document.querySelector("#btnDelete");

    var taskNameEvent = new Boolean(true);
    var assigneeEvent = new Boolean(true);
    var descriptionEvent = new Boolean(true);
    var statusEvent = new Boolean(true);
    var dateEvent = new Boolean(true);

const taskManager = new TaskManager();
const task = new Task();


btnSave.addEventListener("click",function(event){
   
    event.preventDefault();       
 
    taskManager.addTask(taskName.value, description.value, assignee.value, status.value, taskDate.value);
});

btnAdd.addEventListener("click",function(event){

    clearAll();
                          
});




    
    



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

});