class Task{
    constructor(taskId, name, descrip, assign, stat, date){
        this.taskId = taskId,
        this.name = name,
        this.descrip = descrip,
        this.assign = assign,
        this.stat = stat,
        this.date =date
    }
    
    addToHTML1(task){
        
            var itemBox = document.createElement('div');
            itemBox.classList.add('list-group');
    
            var h3 = document.createElement('h3');
            h3.innerHTML = this.name;
            h3.classList.add('h3Element');
    
            var des = document.createElement('small');
            des.classList.add('smallElement1');
            des.innerHTML = this.descrip;
            
            const taskManager = new TaskManager();
            var remove = document.createElement('button');
            remove.classList.add('remove');
            remove.innerHTML = "REMOVE";
            remove.addEventListener('click', () => taskManager.remove(itemBox, this.task));
    
            const listGroupContainer = document.querySelector("#listGroupContainer");
            listGroupContainer.appendChild(itemBox);
    
            itemBox.appendChild(h3);
            itemBox.appendChild(des);
            itemBox.appendChild(remove);
           
        // btnDelete = document.querySelector("#btnDelete");
        // btnDelete.addEventListener('click', () => this.remove(this.taskId,list-group, task));
        // // btnDelete.addEventListener('click', () => this.deleteTaskclicked(event));
        // alert("I am adding delete Event");
      
        // listGroupContainer.innerHTML += addHtml;
    }
    
    addToHTML(task){
        const addHtml = `
        <div id=" ${this.taskId}" id="itemBox" class="listGroup" >
            <a id= "anchor" href="#" class="list-group-item list-group-item-action "  >
                <div id = "taskNameTag" class="d-flex w-100 justify-content-between style="background-color: rgb(159, 133, 159)">
                    <h5 id="h5" class="mb-1">${this.name}</h5>
                   
                </div>
                  <p class="mb-1"><small>${this.descrip}</small></p>
                  <small class= "text-muted">
                    Due by ${this.date}    ${this.assign}   <span style="${this.stat === "To Do" ? "color: green": "color:red"}"> ${this.stat} </span>   
                  </small>
            </a> 
            <button class="btnDelete"  style = "background-color: gainsboro;color: red; border-color:gainsboro;">
              <span>X</span></button>       
        </div>
        `;
        
        // const taskManager = new TaskManager();
        // 
        const listGroupContainer = document.querySelector("#listGroupContainer");
        // const itemBox = document.querySelector("#itemBox");
        listGroupContainer.innerHTML += addHtml;
        // listGroupContainer.appendChild(addHtml);
        // const element = document.createRange().createContextualFragment(addHtml);
        
        // console.log(element.querySelector("button.btnDelete"));
     
        document

            .querySelector("button.btnDelete").addEventListener("click", this.deleteTask());
            // addEventListener("click", (event) => this.deleteTask(event));
            // console.log(event);
    }

    deleteTask(){
        // console.log(event," I am here");
        alert("I am Into remove");
        // const taskManager = new TaskManager();
        // taskManager.taskList=taskManager.taskList.filter(m => m.taskId != taskId);

    }

        // const taskManager = new TaskManager();
        // const element = document.createRange().createContextualFragment(addHtml);
        // const listGroupContainer = document.querySelector("#listGroupContainer");
        // // const itemBox = document.querySelector("#itemBox");
        // listGroupContainer.innerHTML += addHtml;
        
        // console.log()

        // element

        //     .querySelector("button.btnDelete")
        //     .addEventListener("click", (event) => {
        //     alert("I am Into remove");
        //     const listGroupContainer = document.querySelector("#listGroupContainer");
        //     console.log(event);
        // });

        // console.log(element);console.log(element.querySelector("button.btnDelete"));
        // console.log(element.querySelector("button.btnDelete").addEventListener('click', taskManager.deleteTask));
        // element
        // .querySelector("button.btnDelete")
        // .addEventListener("click", taskManager.deleteTask);
        // alert("I am after event Listener");
        

        // const remove = document.querySelector("button#btnDelete");
        // alert("selected delete button");
        // const taskManager =  new TaskManager();
        // remove.addEventListener("click", () => taskManager.remove(event));
        
    }

class TaskManager{
    constructor(allTask){
          this.allTask = [];
   
          this.stringy;
          this.currentId= 1;
           
    }
    // retreiveFromStorage(){
        // const taskObj = JSON.parse(localStorage.getItem("Mundiri")) || [];
        // this.allTask = taskObj.map(
        //     (tsk) => new Task(
        //         tsk.id,
        //         tsk.name,
        //         tsk.description,
        //         tsk.assignee,
        //         tsk.status,
        //         tsk.date
        //     )
        // );
        // this.currentId = parseInt(localStorage.getItem("currentId")) || 1;
    // }

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
    updateTask(){
        // for(let i=0;i< this.allTask.length; i++){

        // }
    }
    displayList(){

    }
    
   
    remove(itemBox, task){
        alert("I am Into remove");
        const listGroupContainer = document.querySelector("#listGroupContainer");
        console.log(event);
        itemBox.parentNode.removeChild(itemBox);
       
        // listGroupContainer.remove(task);
        //this.allTask = this.allTask.filter((itemBox)) => task.
        
        // alert ("I have crossed");
        // let index = todos.indexOf(name);
        // todos.splice(index, 1);
        // window.localStorage.setItem("todos", JSON.stringify(todos));
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

// element

//     .querySelector("button.btnDelete")
//     .addEventListener("click", (event) => this.deleteTask(event));
//     console.log(event);

// btnDelete.addEventListener("click", function(event){
//     alert("I am Mr. X : I am Clicked");

// })


btnSave.addEventListener("click",function(event){
   
    event.preventDefault();       
 
    taskManager.addTask(taskName.value, description.value, assignee.value, status.value, taskDate.value);
    taskManager.updateTask(taskName.value, description.value, assignee.value, status.value, taskDate.value);
});

btnAdd.addEventListener("click",function(event){

    clearAll();
                          
});

// const remove = document.querySelector("#btnDelete");
// remove.addEventListener("click",function(event){
//        const taskManager =  new TaskManager();
//        taskManager.remove(event);
//        alert("I am in remove Listener");
        
// }); 


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