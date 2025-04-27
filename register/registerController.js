export const registerController = (form) => {

    form.addEventLisener("submit", (event) => {
        event.preventDefault();

        const emailElement = form.querySelector('#email');
        const email = emailElement.value;

        const passwordElement = form.querySelector('#password');
        const password = passwordElement.value;

        const passwordConfirmElement = form.querySelector('#password-confirm');
        const passwordConfirm = passwordConfirmElement.value;

        const errors = []

        const emailRegExp =  REGEXP.mail;

        if (!emailRegExp.test(email)){
            errors.push('El formato del email es invalido')
        }

        if (password !== passwordConfirm) {
            errors.push('Las contraseñas no coinciden')
        }

        if (errors.length === 0) {
            //crear usuario
        } else {
            errors.forEach(error => {
                const event = new CustomEvent("register-error", {
                    detail: error
                });
                form.dispatchEvent(event)
            })
        }
    })
}