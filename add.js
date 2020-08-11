var task1 = [
    
];


const taskName=document.querySelector("#taskName");
const description=document.querySelector("#description");
const assignee=document.querySelector("#assignee");
const taskDate=document.querySelector("#taskDate");
const status=document.querySelector("#status");

const taskModal=document.querySelector("#task-modal");
const btnSave=document.querySelector("#btnSave");
const btnReset=document.querySelector("#btnReset");
const btnClose=document.querySelector("#btnClose");

// function updateCard(){
    const taskCardName= document.querySelector("#tsk");
    const taskCardAss= document.querySelector("#asn");
    const taskCardDue= document.querySelector("#due");
    const taskCardStatus= document.querySelector("#st");
    
    taskCardName.textContent=task[task.length-1].taskName;
    taskCardAss.textContent=task[task.length-1].assignee;
    taskCardDue.textContent=task[task.length-1].date;
    taskCardStatus.textContent=task[task.length-1].status; 
    
    taskName.value="";
    description.value="";
    assignee.value="";
    taskDate.value="";
    status.value="";
// }



// btnSave.addEventListener('click', function()) {
    // $("#task-modal").modal("show");

    //taskName valication
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
    
    // emptyForm();
    var taskN = taskName.value;
    var assign= assignee.value;
    var descrip= description.value;
    var stat=status.value;
    var date=taskDate.value;
    obj={  
        taskName:taskN, 
        assignee: assign,
        description: descrip,
        status:stat,
        date: date
    }

    if(taskN.length < 3 || descrip.length < 8 ) {
        task.push(obj);
        taskName.value="";
        description.value="";
        assignee.value="";
        taskDate.value="";
        status.value="";
    
 
    }
    console.log("Test", task);



//Task form validation 


    

