const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://leandro:1234@cluster0.wbauhyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'chanchito triste', edad: 25})
    const saveduser = await user.save()
    console.log(saveduser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'chanchito feliz' })
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({ username: 'chanchito feliz' })
    console.log(user)
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username: 'chanchito feliz' })
    user.edad = 30
    await user.save()
    console.log(user)
}

//actualizar()

const eliminar = async () => {
    const user = await User.findOne({ username: 'chanchito feliz' })
    if (user){
        await user.deleteOne()
    }
}

//eliminar()