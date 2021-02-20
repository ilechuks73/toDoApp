import {categoryArray} from './Data.js'

var categorySelectList = document.querySelector('.category-select-list')
var addCategoryButton = document.querySelector('.add-category-button')
var addNewCategoryNameButton = document.querySelector('.new-category-name-add-button')
var newCategorySection = document.querySelector('.new-category-section')
var categoryNameInput = document.querySelector('.new-category-name-input')

const openNewCategorySection = ()=>{
  newCategorySection.classList.add('open')
}
const closeNewCategorySection = ()=>{
  newCategorySection.classList.remove('open')
}
const addCategory = ()=>{
  categoryArray.push(categoryNameInput.value)
  console.log(categoryArray)
}
const createCategory = ()=>{
  categorySelectList.innerHTML= ''
  for(var i = 0; i<categoryArray.length; i++){
    var el = document.createElement('button')
    el.classList.add('category-select-list-button')
    el.innerHTML = `${categoryArray[i]}`
    el.setAttribute('value', categoryArray[i])
    categorySelectList.append(el)
    categorySelectList.append(addCategoryButton)
  }
}

export {
  categorySelectList,
  addNewCategoryNameButton,
  addCategoryButton,
  openNewCategorySection,
  closeNewCategorySection,
  addCategory,
  createCategory
}