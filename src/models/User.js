//Logica para crear la tabla de usuarios

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

// Metodo para encriptar la contraseña del usuario

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);

};

//Metodo para validar la contraseña que el usuario ingresa

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);

}


module.exports = model('User', userSchema);