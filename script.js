let Tasks=JSON.parse(localStorage.getItem('tasks')) || [];
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(Tasks));
}

const cls = () => localStorage.clear();

const tasksManager = _ =>{
    console.log("")
    console.log("Task Manager Menu :");
    console.log("1. Add Tasks")
    console.log("2. View Tasks")
    console.log("3. Toggle Tasks Completion")
    console.log("4. Edit Task")
    console.log("5. Delete Task")
    console.log("6. Serach For Tasks")
    console.log("7.To clear local storge")
    console.log("8. Exit")
    console.log("")
    let taskNum = prompt("Enter Your Choice(1-8)",'');
    switch (taskNum) {
        case "1":
            let add = prompt("Enter Your Task Description ");
            console.log("Task Added : " + add)
            add = add + " : " + "[Not Completed]"
            Tasks.push(add)
            saveTasks();
            tasksManager();
            break;
        case "2":
            if(Tasks.length == 0){
                console.log("No Tasks Found");
            }else{
                console.log("Your Tasks :");
                Tasks.map((task , index)=>{
                    index++;
                    console.log(index +"- " + task)
                })
            }
            tasksManager();
            break;
        case "3":
            let id = prompt("Enter the task ID to toggle completion:");
            Tasks.map((task, index) => {
                if (id == index + 1) {
                    if(task.includes("Not Completed")){

                        console.log("Task " + task.slice(0, task.indexOf(":")) + " is now marked as completed");
                        task = task.replace("[Not Completed]", "[Completed]");
                        Tasks.splice(index, 1, task);
                    }else if(task.includes("Completed")){
                        console.log("Task " + task.slice(0, task.indexOf(":")) + " is now marked as Not completed");
                        task = task.replace("[Completed]", "[Not Completed]");
                        Tasks.splice(index, 1, task);

                    }
                }
            });
            saveTasks();
            tasksManager();
            break;
        case "4":
            let id1 = prompt("Enter the task ID to Edit:");
            let taskToEdit = Tasks.find((task, index) => index + 1 == id1);
        
            if (taskToEdit) {
                let newTask = prompt("Edit Your Task Description:");
                let taskIndex = Tasks.indexOf(taskToEdit);
                Tasks.splice(taskIndex, 1, newTask + " : " + "[Not Completed]");
                console.log("Task updated successfully.");
            } else {
                console.log("Task Not Found, please Enter Correct Task ID");
            }
        
            saveTasks();
            tasksManager();
            break;
        case "5":
            let id2 = prompt("Enter the task ID to Delete:");
            let taskToDelete = Tasks.find((task, index) => index + 1 == id2);

            if (taskToDelete) {
                let taskIndex = Tasks.indexOf(taskToDelete);
                Tasks.splice(taskIndex, 1);
                console.log("Task deleted successfully.");
            } else {
                console.log("Task Not Found, please Enter Correct Task ID");
            }
            
            tasksManager();
            break;
        case "6":
            let search = prompt("Enter the task name to search:");
            let found = false;
            Tasks.filter((task) => {
                if (task.slice(0, task.indexOf(":")).includes(search)) {
                    console.log("Task Found: " + task);
                    found = true;
                }
            });
            if (!found) {
                console.log("Task Not Found");
            }
            tasksManager();
            break;
        case "7":
            cls();
            break;
        case "8":
            console.log("Exiting Task Manager");
            break;
        default:
            console.log("Invalid Choice, Please Enter Number Between 1-8");
            tasksManager();
            break;
    }
}
tasksManager()

