const controller = {};
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12})");
controller.register = registerInfo => {
    console.log(registerInfo);

    if (!registerInfo.email) {
        view.setError('email-error', 'Email không được để trống')
    } else {
        view.setError('email-error', '')
    }
    if (!registerInfo.password) {
        view.setError('password-error', 'Mật khẩu không được để trống')
    } else if (registerInfo.password.length >= 12 || registerInfo.password.length < 6) {
        view.setError('password-error', 'Mật khẩu phải chứa ít nhất 6 ký tự và tối đa 12 ký tự ')
    } else if (!(strongRegex.test(registerInfo.password))) {
        view.setError('password-error', 'Mật khẩu phải chứa ít nhất 1 trong các ký tự chữ số viết in hoa, viết thường và ký tự đặc biệt')
    } else {
        view.setError('password-error', '')
    }
    // if (registerInfo.password.length >= 12 || registerInfo.password.length < 6) {
    //     view.setError('password-error', 'Mật khẩu phải có ít nhất 6 ký tự và tối đa 12 ký tự')
    // }
    if (!registerInfo.confirmPassword) {
        view.setError('confirmPassword-error', 'Mật khẩu không được để trống')
    } else if (registerInfo.confirmPassword != registerInfo.password) {
        view.setError('confirmPassword-error', 'Mật khẩu không khớp')
    } else {
        view.setError('confirmPassword-error', '')
    }
};