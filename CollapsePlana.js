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
        const addHtml = `
        
        <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Task 1
                  </button>
                </h2>
              </div>
          
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                    <div style="display:flex;">
                        <small>3 days ago</small> 
                        <button class="btnDelete btn btn-danger btn-sm" style = "background-color: white;color: red; border-color: white;">
                        X</button>
                    </div>
                    <p class="mb-1">Task Description</p>
                    <small class= "text-muted">
                      Due Tomorrow  Asignee:     Status:     
                    </small>
                </div>
              </div>
            </div>
        
    `;

    // <button type="button" class="btn btn-secondary" id="btnClose" data-dismiss="modal">Close</button>
    // <button type="button" class="btn btn-primary" id="btnSave">Understood</button>
    const accordion= document.querySelector("#accordion");
    accordion.innerHTML += addHtml;
    const element = document.createRange().createContextualFragment(addHtml);
    // const itemBox = document.querySelector("#itemBox");
    const taskManager = new TaskManager();
    element.querySelector("button.btnDelete").addEventListener("click", taskManager.deleteBtnClicked());
   
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

        const accordion = document.querySelector("#accordion");
        accordion.innerHTML="";
        for(let i=0; i< this.taskList.length;i++)
        {   
            const task = new Task(
                this.taskList[i].taskid,
                this.taskList[i].name,
                this.taskList[i].descrip,
                this.taskList[i].assign,
                this.taskList[i].name,         
                this.taskList[i].date);
            console.log(this.taskList[i]);
            console.log(this.taskList[i].taskId);
            
            task.addToHTML();
        }
    }


    getAllTasks(){
            return this.taskList;
    }
        
        // addTask(name, descrip,assignee,status,date){
        //     task.taskId = this.id++;
        //     this.taskList.push(task);
        // }
    deleteBtnClicked()
    {
            alert("I am inside Delete Task");
            var delArray=[];
            var deleted;
            var taskD = this.taskList;

            for(var i=taskD.length-1;i>=0; i--){
                    delArray[i]=document.getElementsByName("button" + taskD[i].taskId);
                    alert("Buttton Name",delArray[i]);
                    deleted= taskD[i];
                    delArray[i].addEventListener("click", function()
                    {
                        taskManager.deleteTask(deleted.taskId); alert("I am here");
                        // displayTask(taskManager.getAllTasks()); 
                    });
            }

            // const taskElement = 
            // // this.deleteTask(taskElement.id);
            // alert(taskElement.id);
    }
    
    deleteTask(taskId){

              this.taskList=this.taskList.filter(m => m.taskId != taskId);
            //   this.taskList=this.taskList.splice(taskId,0,taskId);
              console.log(taskId);
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
const btnDelete=document.querySelector("#btnDelete");

const listGroupContainer=document.querySelector("#listGroupContainer");

var taskNameEvent = new Boolean(true);
var assigneeEvent = new Boolean(true);
var descriptionEvent = new Boolean(true);
var statusEvent = new Boolean(true);
var dateEvent = new Boolean(true);

    // Initialising(creating instances) classes
    const task = new Task();
    const taskManager = new TaskManager();
    // taskManager.displayTask();

    // let allTasks = taskManager.getAllTasks();
    
// btnAdd.addEventListener("click",function(event){
//     clearAll();// $("#task-modal").modal("show");
      
// }); 


btnSave.addEventListener("click",function(event){
    if(taskNameEvent && assigneeEvent && descriptionEvent && statusEvent){
    
        taskManager.addTask(taskName.value, description.value, assignee.value, status.value, taskDate.value);
        // taskManager.displayTask(taskName.value, description.value, assignee.value, status.value, taskDate.value);
        clearAll();
        $('#staticBackdrop').modal("hide");   
        return true;        
    }
    else{
        return false;
    }
});





// function deleteTask(){
//     document.querySelector("button.btnDelete").addEventListener("click", deleteTask());
//     alert("I have come into Delete");
// }
// for(let i=0;i<taskManager.taskList.length;i++){
//     document.
//     addEventListener("click",function(event) 
//     getElementByName("button"+ taskManager.taskList[i].taskId));
// }
// var delArray=[];
// var deleted;
// function deleteItems(){

//     var taskD = taskManager.getAllTasks();
   
//     for(var i=taskD.length-1;i>=0; i--){
//         delArray[i]=document.getElementById("btnDelete" + taskD[i].taskId);
       
//          deleted= taskD[i];
//        delArray[i].addEventListener("click", function()
//        {
//             taskManager.deleteTask(deleted.taskId);
//             displayTask(taskManager.getAllTasks()); 
//        });
//     }
// }

// btnDelete.addEventListener("click",function(event) {
//     alert("I am into Delete click");
// });
   
    // Initialising Listgroup item and HTML Elements
// const listGroupContainer = document.querySelector("#listGroupContainer");

// function displayTask(tk){
//     console.log(tk);
//     listGroupContainer.innerHTML="";
//    for(var i=0; i< tk.length;i++){
//      var id="btnDelete"+tk[i].taskId;
//     listGroupContainer.innerHTML +=
//     ('<a href="#" class="list-group-item list-group-item-action ">\n'+
//       '<div class="d-flex w-100 justify-content-between">\n' +
//         '<p<h5 class="mb-1">' + tk[i].taskId + tk[i].name + '   </h5>' +
//         '<small>' + tk[i].date +'</small>' +  
//         '<button class="btn btn-danger btn-sm" id=' + id +  ' ' + 'style = "background-color: gainsboro;color: red; border-color:gainsboro;">X</button> \n' +
//       '</div>' +
//       '<p class="mb-1">' + tk[i].descrip + ' Task Description</p>' +
//       '<small class= "text-muted">' +
//         'Due ' + tk[i].date + '  Asignee: ' + tk[i].assign + ' Status: ' + tk[i].stat +    
//       '</small> \n' +
//     '</a>\n' );
//     }
// }
// displayTask(allTasks);    
 
// var delArray=[];
// var deleted;
// function deleteItems(){

//     var taskD = taskManager.getAllTasks();
   
//     for(var i=taskD.length-1;i>=0; i--){
//         delArray[i]=document.getElementById("btnDelete" + taskD[i].taskId);
       
//          deleted= taskD[i];
//        delArray[i].addEventListener("click", function()
//        {
//             taskManager.deleteTask(deleted.taskId);
//             displayTask(taskManager.getAllTasks()); 
//        });
//     }
// }

// deleteItems();

// var delArray=[];
// var deleted;
// function deleteItems(){

//     var taskD = taskManager.getAllTasks();
   
//     for(var i=taskD.length-1;i>=0; i--){
//         delArray[i]=document.getElementById("btnDelete" + taskD[i].taskId);
       
//          deleted= taskD[i];
//        delArray[i].addEventListener("click", function()
//        {
//             taskManager.deleteTask(deleted.taskId);
//             displayTask(taskManager.getAllTasks()); 
//        });
//     }
    
    
// }


// deleteItems();


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
        if (event.target.value) {
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