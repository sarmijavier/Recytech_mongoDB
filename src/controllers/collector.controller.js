const controllerCtrl = {}

controllerCtrl.renderSignUpForm = (req,res) => {
    res.render('./users/signup')

}

controllerCtrl.signup = (req,res) =>{
    const { name, lastname, phone_number, email_Address, password, tipo } = req.body
        
}

controllerCtrl.renderSinginForm = (req,res) => {
    res.render('./users/signin')
}

controllerCtrl.signin = (req,res) => {
    res.send('signin')
}

controllerCtrl.logout = (req,res) => {
    res.send('logout')
}

module.exports = controllerCtrl