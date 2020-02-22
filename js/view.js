const view = {}

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'register':
            document.getElementById('app').innerHTML = components.register;
            const registerForm = document.getElementById('register-form')
            console.log(registerForm);

            registerForm.addEventListener('submit', e => {
                e.preventDefault();
                const registerInfo = {
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                };
                console.log(registerInfo);

                controller.register(registerInfo);
            });
            break;
        case 'login':
            document.getElementById('app').innerHTML = components.login;
            break;
    }
};

view.setError = (id, textError) => {
    document.getElementById(id).innerHTML = textError;
};