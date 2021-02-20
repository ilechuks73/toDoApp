//IMPORTS
import { firstTimeSetup } from './Setup.js'
import { getData, updateData, updateCategory, getCategory } from './Data.js'
import { notify, iconSuccess, iconError } from './Notification.js'
import { createTasks, deleteTasks } from './Tasks.js'
import { 
  categorySelectList,
  addCategoryButton,
  addNewCategoryNameButton,
  openNewCategorySection,
  closeNewCategorySection,
  addCategory,
  createCategory 
} from './Category.js'

//INPUTS
var taskNameInput = document.querySelector('.task-name-input')
var newTasks;
var newTasksCategory;

//BUTTONS

var createTaskButton = document.querySelector('.create-task-button')
var createTaskCloseButton = document.querySelector('.task-creator-close-button')
//var saveTaskButton = document.querySelector('.save-task-button')
var addTaskButton = document.querySelector('.add-task-button')
var categorySelectButton = document.querySelector('.category-select-button')
var categorySelectListButton = document.querySelector('.category-select-list-button')
var taskDeleteButton = document.querySelector('.task-delete-button')

var firstTimeSetupModalButton = document.querySelector('.first-time-setup-modal-button')
var firstTimeSetupModal = document.querySelector('.first-time-setup-modal')
var userNameInput = document.querySelector('.user-name-input')


//MENUS


//SECTIONS
var loader = document.querySelector('.loader')
var taskCreationSection = document.querySelector('.task-creator')
var taskListSection = document.querySelector('.task-list')
var noTaskMessage = document.querySelector('.empty-task-list-message')


let taskArray = [];
let taskCategoryArray = [];
var username = document.querySelector('.username')
username.innerHTML = localStorage.getItem('username')


var firstTime = localStorage.getItem('firstTime')
//----------------------------------------------

window.onload = () => {
  setTimeout(() => {
    loader.classList.add('hide')
  }, 500);
}

if (firstTime !== 'false') {
  firstTimeSetup(firstTimeSetupModalButton, firstTimeSetupModal, userNameInput)
}

getData(taskArray, taskCategoryArray)
createTasks(taskArray, taskCategoryArray, taskListSection, noTaskMessage)
getCategory()
createCategory()

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
  e.preventDefault()
  if (taskNameInput.value.length > 0) {
    newTasks = taskNameInput.value
    newTasksCategory = categorySelectButton.value
    taskArray.push(newTasks)
    taskCategoryArray.push(newTasksCategory)
    updateData(taskArray, taskCategoryArray)
    taskNameInput.value = ""
    taskArray = [];
    taskCategoryArray = [];
    getData(taskArray, taskCategoryArray)
    createTasks(taskArray, taskCategoryArray, taskListSection, noTaskMessage)
    notify('task created', '#2DC847', iconSuccess)

  }
  else {
    notify('enter a task', '#FF0A0A', iconError)
    return false;
  }
})

taskListSection.addEventListener('click', (event) => {
  if (event.target.value === 'delete') {
    var id = event.target.getAttribute('data-id')
    deleteTasks(id, taskArray, taskCategoryArray, taskListSection, noTaskMessage)
    updateData(taskArray, taskCategoryArray)
    taskArray = [];
    taskCategoryArray = [];
    getData(taskArray, taskCategoryArray)
    createTasks(taskArray, taskCategoryArray, taskListSection, noTaskMessage)
  }
})

addCategoryButton.addEventListener('click', ()=>{
  openNewCategorySection()
})

addNewCategoryNameButton.addEventListener('click', ()=>{
  addCategory()
  updateCategory()
  closeNewCategorySection()
  createCategory()
})

