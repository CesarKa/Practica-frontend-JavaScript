import { loginController } from "./login/loginController.js"
import { loaderController } from "./show-loader/showLoaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form")
  const notifications = document.querySelector(".notifications");
  const loader = document.querySelector('.loader');
  
  
  const {show, hide} = loaderController(loader)
  
  const { showNotification } = notificationsController(notifications)


  loginForm.addEventListener('login-start', show)
  loginForm.addEventListener('login-finished', hide)

  loginForm.addEventListener("login-error", (event) => {
    const message = event.detail.message;
    const type = event.detail.type;
    showNotification(message, type)
  })

  loginForm.addEventListener("login-ok", (event) => {
    const message = event.detail.message;
    const type = event.detail.type;
    showNotification(message, type)
  })


  loginController(loginForm)
})
