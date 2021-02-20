var notificationArea = document.querySelector('.notification-area')
var notificationMessage;
var notificationBackgroundColor;
var imageUrl;
var iconSuccess = 'assets/images/icons/checked.png'
var iconError = 'assets/images/icons/error.png'

const createNotification = (notificationMessage, notificationBackgroundColor) => {
  var el = document.createElement('div')
  el.classList.add('notification', 'animate')
  el.innerHTML = `
    <img src="${imageUrl}" class="notification-icon">
    <p class="notification-message">${notificationMessage}</p>
    `
  el.style.backgroundColor = notificationBackgroundColor
  notificationArea.appendChild(el)
  setTimeout(() => {
    notificationArea.removeChild(el)
  }, 2000);
}

const notify = (message, color, icon) => {
  notificationMessage = message;
  notificationBackgroundColor = color;
  imageUrl = icon;
  // notificationArea = 'red'
  // notification.classList.add('animate')
  // setTimeout(() => {
  //     notification.classList.remove('animate')
  // }, 2000);
  createNotification(notificationMessage, notificationBackgroundColor)
}

export { notify, notificationArea, notificationMessage, iconSuccess, iconError }