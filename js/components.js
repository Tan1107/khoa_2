const components = {}

components.register = `
<div class="summary">
    <div class="image"></div>
    <div class="regiter-containt">
        <div class="logo>
            <span>Techkids Chat</span>
        </div>

        <div class="form-container">
            <form id='register-form'>
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input class="input-wrapper" type="text" name="fistName" placeholder="Fist name" />
                        <div class="error" id="email-error"></div>
                    </div>

                    <div class="input-wrapper">
                        <input class="input-wrapper" type="text" name="lastName" placeholder="Last name" />
                        <div class="error" id="email-error"></div>
                    </div>
                </div>
               
                <div class="input-wrapper">
                    <input class="input-wrapper" type="email" name="email" placeholder="Email" />
                    <div class="error" id="email-error"></div>
                </div>

                <div class="input-wrapper">
                    <input class="input-wrapper" type="password" name="password" placeholder="Password" />
                    <div class="error" id="password-error"></div>
                </div>
    
                <div class="input-wrapper">
                    <input class="input-wrapper" type="password" name="confirmPassword" placeholder="Confirm password" />
                    <div class="error" id="confirmPassword-error"></div>
                </div>

                <div class="error" id="form-error"></div>

                <div class="input-wrapper register-footer">
                    <a id="already-have-account">Already have an account? Login</a>
                    <button class="btn" type="submit">
                        <span>Register</span>
                    </button>
            </form>
        </div>
    </div>
</div>
`
components.login = `
<div>
<div class="sign-up">
<div id="signin-form">
    <form id ='login-form'>
        <div class="input-group">
            <label for="">Email</label>
            <br>
            <input type="email-login" name="email" placeholder="email">
            <div class = "error-login" id = "email-error-login"></div>
        </div>
        
        <div class="input-group">
            <label for="">Password</label>
            <br>
            <input type="password" name="password">
            <div class = "error-login" id = "password-error-login"></div>
        </div>
        <button id="button" type='submit'>SignUp</button>

</div>
`