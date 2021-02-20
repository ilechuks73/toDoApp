//FIRST TIME SETTING UP
const firstTimeSetup = (firstTimeSetupModalButton, firstTimeSetupModal, userNameInput) => {
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
      localStorage.setItem('username', userNameInput.value)
      localStorage.setItem('category', ['personal', 'work', 'recreation'])
      location.reload()
    }
  })
}

export { 
  firstTimeSetup
}