import { REGEXP } from "../utils/constants.js";
import { loginUser } from "./loginModel.js";

export function loginController(loginForm) {
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userEmailElement = loginForm.querySelector("#mail");
    const passwordElement = loginForm.querySelector("#password");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    
    const emailRegExp = new RegExp(REGEXP.mail);


    
    if (!emailRegExp.test(userEmail)) {
      const event = new CustomEvent('login-error', {
        detail: error.message
      })
      loginForm.dispatchEvent(event)
    } else {
      handleLoginUser(userEmail, password)
    }
    

  })

  async function handleLoginUser(userEmail, password) {
    const event = new CustomEvent('login-start')
    loginForm.dispatchEvent(event)
    
    try {
      const token = await loginUser(userEmail, password)
      localStorage.setItem("token", token)
      const eventok = new CustomEvent('login-ok', {
        detail: {
          message: 'Te logeaste correctamente!',
          type: 'success'
        }
      })
      loginForm.dispatchEvent(eventok)
      setTimeout(() => {
        window.location = '/'
      }, 2000);

    } catch {
      const eventko = new CustomEvent('login-error', {
        detail: {
          message: 'El email o contraseña son incorrectos!',
          type: 'error'
        }
      })
      loginForm.dispatchEvent(eventko)
    } finally {
      const event = new CustomEvent('login-finished')
      loginForm.dispatchEvent(event)
    }
 
  }

}

