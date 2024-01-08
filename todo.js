const task = document.getElementById("input-box");
const add_btn = document.querySelector(".add-btn");
const listcontainer = document.querySelector(".listcontainer")
function add_list() {
    if (task.value === '') {
        alert("you must write somthing");
    }
    else {
        let task_list = document.createElement("li");
        task_list.innerHTML = task.value;
        listcontainer.appendChild(task_list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        task_list.appendChild(span);
    }
    task.value = '';

}
add_btn.addEventListener("click",()=>{
     add_list();
 })

listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("chacked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)