const createTasks = (taskArray, taskCategoryArray, taskListSection, noTaskMessage) => {
    taskListSection.innerHTML = ''
    for (var i = 1; i < taskArray.length; i++) {
        var el = document.createElement('table')
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
        taskListSection.appendChild(el)
    }
    if (taskArray.length < 2) {
        taskListSection.appendChild(noTaskMessage)
    }
}

const deleteTasks = (id, taskArray, taskCategoryArray) => {
    taskArray.splice(id, 1)
    taskCategoryArray.splice(id, 1)
}

export { createTasks, deleteTasks }