const updateData = (taskArray, taskCategoryArray) => {
  localStorage.setItem('tasks', taskArray)
  localStorage.setItem('tasksCategory', taskCategoryArray)
}

const getData = (taskArray, taskCategoryArray) => {

  for (var i = 0; i < localStorage.getItem('tasks').split(',').length; i++) {
    taskArray.push(localStorage.getItem('tasks').split(',')[i])
    taskCategoryArray.push(localStorage.getItem('tasksCategory').split(',')[i])
  }
}

export { getData, updateData }


var categoryArray;

const updateCategory = ()=>{
  localStorage.setItem('category', categoryArray)
}

const getCategory =()=>{
  categoryArray = localStorage.getItem('category').split(",")
}


export{ 
  updateCategory, 
  getCategory, 
  categoryArray
}