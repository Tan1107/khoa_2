const components = {}

components.register =
    `
    <div class="image">
    </div>
    <div class="form-sign">
        <p>Techkids Chat</p>
        <div class="signup">
            <div id="signup-form">
                <form id='register-form'>
                    <div class="input-group">
                        <label for="">Email</label>
                        <br>
                        <input type="email" name="email" placeholder="email">
                        <div class="error" id="email-error"></div>
                    </div>

                    <div class="input-group">
                        <label for="">Password</label>
                        <br>
                        <input type="password" name="password">
                        <div class="error" id="password-error"></div>
                    </div>

                    <div class="input-group">
                        <label for="">Confirm Password</label>
                        <br>
                        <input type="password" name="confirmPassword">
                        <div class="error" id="confirmPassword-error"></div>
                    </div>

                    <p id='already-have-account'>Aready have an account? Login </p>

                    <button id="button" type='submit'>Register</button>
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