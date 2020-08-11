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
    const addHtml = 
        '<div class="list-group" >\n'+
        '<a href="#" class="list-group-item list-group-item-action ">\n'+
          '<div class="d-flex w-100 justify-content-between">\n' +
            '<p<h5 class="mb-1">' + this.taskId + this.name + ' Task Name  </h5>' +
            '<small>' + this.date +'</small>' +  
            '<button class="btn btn-danger btn-sm" id="btnDelete" style = "background-color: gainsboro;color: red; border-color:gainsboro;">X</button> \n' +
          '</div>' +
          '<p class="mb-1">' + this.descrip + ' Task Description</p>' +
          '<small class= "text-muted">' +
            'Due ' + this.date + '  Asignee: ' + this.assign + ' Status: ' + this.stat +    
          '</small> \n' +
        '</a>\n' +             
        '</div>\n';
    const listGroupContainer = document.querySelector("#listGroupContainer");
    listGroupContainer.innerHTML += addHtml;
    }
}
class TaskManager{
    constructor(task){
          this.task = task;
          this.id = 4;
          this.taskList = [
            {
                taskId: 1,
                name: 'First Task',
                descrip: 'Shoping for Birthday',
                assign: 'suba',
                stat: 'To Do',
                date: '2020-08-20'
            },
            {
                taskId: 2,
                name: 'Second Task',
                descrip: 'Shoping for Birthday',
                assign: 'suba',
                stat: 'To Do',
                date: '2020-08-20'
            },
            {
                taskId: 3,
                name: 'Third Task',
                descrip: 'Shoping for Birthday',
                assign: 'suba',
                stat: 'To Do',
                date: '2020-08-20'
                }];
    }
        getAllTasks(){
            //   let taskJson = JSON.parse(this.taskList || '[]');
              return this.taskList;
          }
        
          addTask(task){
            task.taskId = this.id++;
            this.taskList.push(task);
                  }

          deleteTask(taskId){
              this.taskList=this.taskList.filter(m => m.taskId != taskId);
          }
          updateTask(taskId,name,descrip,assign,stat,date){}
          assignTask(taskId, assign){}
}

    
document.addEventListener('DOMContentLoaded', function(){


//MODAL Form Elements Initialising
const taskName=document.querySelector("#taskName");
const description=document.querySelector("#description");
const assignee=document.querySelector("#assignee");
const taskDate=document.querySelector("#taskDate");
const status=document.querySelector("#status");

// Collecting MODAL Form values
var taskNameValue=document.querySelector("#taskName").value;
var descriptionValue=document.querySelector("#description").value;
var assigneeValue=document.querySelector("#assignee").value;
var taskDateValue=document.querySelector("#taskDate").value;
var statusValue=document.querySelector("#status").value;

//Modal and Form Buttons 
const taskModal=document.querySelector("#task-modal");
const btnSave=document.querySelector("#btnSave");
const btnReset=document.querySelector("#btnReset");
const btnClose=document.querySelector("#btnClose");

// Add, Edit and Delete Buttons on PAGE
const btnAdd=document.querySelector("#btnSave");
const btnEdit=document.querySelector("#btnEdit");
const btnDelete=document.querySelector("#btnDelete");

// Initialising Task CARD 
const taskCardName= document.querySelector("#tsk");
const taskCardAss= document.querySelector("#asn");
const taskCardDue= document.querySelector("#due");
const taskCardStatus= document.querySelector("#st");

// Collecting Task CARD Values
var taskN = taskName.value;
var assign= assignee.value;
var descrip= description.value;
var stat=status.value;
var date=taskDate.value;

var taskNameEvent = new Boolean(true);
var assigneeEvent = new Boolean(true);
var descriptionEvent = new Boolean(true);
var statusEvent = new Boolean(true);
var dateEvent = new Boolean(true);

    // Initialising(creating instances) classes
    const task = new Task();
    const taskManager = new TaskManager();

    let allTasks = taskManager.getAllTasks();
    
    
   
    // Initialising Listgroup item and HTML Elements
const listGroupContainer = document.querySelector("#listGroupContainer");

function displayTask(tk){
    console.log(tk);
    listGroupContainer.innerHTML="";
   for(var i=0; i< tk.length;i++){
     var id="btnDelete"+tk[i].taskId;
    listGroupContainer.innerHTML +=
    ('<a href="#" class="list-group-item list-group-item-action ">\n'+
      '<div class="d-flex w-100 justify-content-between">\n' +
        '<p<h5 class="mb-1">' + tk[i].taskId + tk[i].name + '   </h5>' +
        '<small>' + tk[i].date +'</small>' +  
        '<button class="btn btn-danger btn-sm" id=' + id +  ' ' + 'style = "background-color: gainsboro;color: red; border-color:gainsboro;">X</button> \n' +
      '</div>' +
      '<p class="mb-1">' + tk[i].descrip + ' Task Description</p>' +
      '<small class= "text-muted">' +
        'Due ' + tk[i].date + '  Asignee: ' + tk[i].assign + ' Status: ' + tk[i].stat +    
      '</small> \n' +
    '</a>\n' );
    }

}
 displayTask(allTasks);    
    
    
    var forms = document.querySelector(".needs-validation");

    var validation = Array.prototype.filter.call(forms, function (form){
        form.addEventListener('submit', function(event){
            if(form.checkValidity() === false){
                event.preventDefault();
                event.stopPropagation();
            }
            // if(form.elements.namedItem('taskName').value.length < 8){
            //     console.log('Task Name must be atleast 8 characters');
            // }
            // if(form.elements.namedItem('description').value.length < 8){
            //     console.log('Task description must be atleast 8 characters');
            // }
            
            // form.classList.add("was-validated");
        }, false
        );
    });

    






// listGroupItem.append();
// //Listing values into the ListGroup container

// listGroupItem.addEventListener("dblclick",function(event){   
//     });


// listGroupItem.addEventListener("click",function(event){
//     function updateCard(){
               
//         // taskCardName.textContent=allTask[allTask.length-1].taskName;
//         // taskCardAss.textContent=allTask[allTask.length-1].assignee;
//         // taskCardDue.textContent=allTask[allTask.length-1].date;
//         // taskCardStatus.textContent=allTask[allTask.length-1].status; 
        
//         taskName.value="";
//         description.value="";
//         assignee.value="";
//         taskDate.value="";
//         status.value="";
    
       
//         // obj={  
//         //     taskName:taskN, 
//         //     assignee: assign,
//         //     description: descrip,
//         //     status:stat,
//         //     date: date
//         // }
    
//         if(taskN.length < 3 || descrip.length < 8 ) {
//             task.push(obj);
//             taskName.value="";
//             description.value="";
//             assignee.value="";
//             taskDate.value="";
//             status.value="";
//         }
//         console.log("Test", task);  
//     }    
    
    
//     });

btnAdd.addEventListener("click",function(event){
    clearAll();// $("#task-modal").modal("show");
    alert("I have cleaned the form");
    //Check Validation
    
});
var delArray=[];
var deleted;
function deleteItems(){

    var taskD = taskManager.getAllTasks();
   
    for(var i=taskD.length-1;i>=0; i--){
        delArray[i]=document.getElementById("btnDelete" + taskD[i].taskId);
       
         deleted= taskD[i];
       delArray[i].addEventListener("click", function()
       {
            taskManager.deleteTask(deleted.taskId);
            displayTask(taskManager.getAllTasks()); 
       });
    }
    
    
}


deleteItems();


btnSave.addEventListener("click",function(event){
    // if(taskName.value && assignee.value && description.value && status.value !==""){
    if(taskNameEvent && assigneeEvent && descriptionEvent && statusEvent){
            alert("I am Good");
            $('#staticBackdrop').modal("toggle");
            
            console.log(taskName.value, "hello");
            var taski = {taskId: 5841,
                name: taskName.value,
                descrip: description.value,
                assign: assignee.value,
                stat: status.value,
                date: taskDate.value}
            taskManager.addTask(taski);
            displayTask(taskManager.getAllTasks());
            return true;
            // addToItemList();
        }
    else{
            alert("I am not looking Good, Please Complete the form");
            return false;
    }
});


function clearAll(){

    taskName.value=null;
    description.value=null;
    assignee.value=null;
    taskDate.value=null;
    status.value=null;

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

 
 ///Task Form Validation Ends here

 //clear Validation
// function clearValidation(){
//      taskName.classList.remove("is-valid", "is-valid");
//      description.classList.remove("is-valid", "is-valid");
//      assignee.classList.remove("is-valid", "is-valid");
//      status.classList.remove("is-valid", "is-valid");
//      taskDate.classList.remove("is-valid", "is-valid");
// }

}); 