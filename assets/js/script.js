index = 0
num = [1, 4, 7, 8]
//INPUTS
var taskNameInput = document.querySelector('.task-name-input')
var userNameInput = document.querySelector('.user-name-input')

//BUTTONS
var firstTimeSetupModalButton = document.querySelector('.first-time-setup-modal-button')
var createTaskButton = document.querySelector('.create-task-button')
var createTaskCloseButton = document.querySelector('.task-creator-close-button')
var saveTaskButton = document.querySelector('.save-task-button')
var addTaskButton = document.querySelector('.add-task-button')
var categorySelectButton = document.querySelector('.category-select-button')
var categorySelectListButton = document.querySelector('.category-select-list-button')
var taskDeleteButton = document.querySelector('.task-delete-button')


//MENUS
var categorySelectList = document.querySelector('.category-select-list')

//SECTIONS
var taskCreationSection = document.querySelector('.task-creator')
var taskListSection = document.querySelector('.task-list')
var firstTimeSetupModal = document.querySelector('.first-time-setup-modal')
var noTaskMessage = document.querySelector('.empty-task-list-message')


var tasks = document.querySelector('.tasks')
var username = document.querySelector('.username')
username.innerHTML = localStorage.getItem('username')


var taskArray;
var taskCategoryArray;
var taskIndex;
//-------------------------------------------------------------------

//FIRST TIME SETTING UP
var firstTime = localStorage.getItem('firstTime')
username = localStorage.getItem('username')
if (firstTime !== 'false') {
    firstTimeSetupModal.classList.add('open')
    firstTimeSetupModalButton.addEventListener('click', () => {
        if (userNameInput.value === '') {
            alert('enter a name')
            return false
        }
        else {
            firstTimeSetupModal.classList.remove('open')
            localStorage.setItem('firstTime', 'false')
            localStorage.setItem('tasks', '0')
            localStorage.setItem('tasksCategory', '0')
            localStorage.setItem('tasksIndex', index)
            localStorage.setItem('username', userNameInput.value)
            location.reload()
        }
    })
}


function getData() {
    taskArray = localStorage.getItem('tasks').split(',')
    console.log(taskArray)
    taskCategoryArray = localStorage.getItem('tasksCategory').split(',')
    console.log(taskCategoryArray)
    taskIndex = localStorage.getItem('tasksIndex').split(',')
    console.log(taskIndex)
    taskListSection.innerHTML = ''
    for (var i = 1; i < taskArray.length; i++) {
        el = document.createElement('table')
        el.classList.add('task-wrapper')
        el.innerHTML = `
    <table>
    <tr>
        <td class="task">${taskArray[i]}</td>
        <td class="category">${taskCategoryArray[i]}</td>
        <td><button class="task-delete-button" value='delete' data-id='${i}'>delete</button></td>
    </tr>
    </table>
    `
        console.log(taskArray[i])
        taskListSection.appendChild(el)
    }
    if(taskArray.length < 2){
        taskListSection.appendChild(noTaskMessage)
    }


}
getData()


function updateData() {
    localStorage.setItem('tasks', taskArray)
    localStorage.setItem('tasksCategory', taskCategoryArray)
    localStorage.setItem('tasksIndex', taskIndex)
}

createTaskButton.addEventListener('click', () => {
    if (taskCreationSection.classList.contains('open')) {
        return false
    }
    else {
        taskCreationSection.classList.add('open')
    }
})

createTaskCloseButton.addEventListener('click', () => {
    if (taskCreationSection.classList.contains('open')) {
        taskCreationSection.classList.remove('open')
        categorySelectList.classList.remove('open')
    }
    else {
        return false;
    }
})

categorySelectButton.addEventListener('click', () => {
    categorySelectList.classList.add('open')
})

categorySelectList.addEventListener('click', (event) => {

    categorySelectButton.value = event.target.value
    if (event.target.value != null) {
        categorySelectList.classList.remove('open')
    }
})


addTaskButton.addEventListener('click', (e) => {
    if (taskNameInput.value.length > 0) {
        e.preventDefault()
        newTasks = taskNameInput.value
        newTasksCategory = categorySelectButton.value
        index += 1
        taskArray.push(newTasks)
        taskCategoryArray.push(newTasksCategory)
        taskIndex.push(index)
        updateData()
        taskNameInput.value = ""
        console.log(localStorage)
        getData()
    }
    else {
        alert('enter a task Name!')
        return false;
    }
})

taskListSection.addEventListener('click', (event) => {
    if (event.target.value === 'delete') {
        id = event.target.getAttribute('data-id')
        taskArray.splice(id, 1)
        taskCategoryArray.splice(id, 1)
        updateData()
        getData()
    }
})

var date = new Date()
console.log(date.toString())