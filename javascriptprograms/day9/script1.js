
let user={
    username:'Alice',
    password:'Alice123'
}

console.log(user)
console.log(typeof(user))

let str=JSON.stringify(user)
console.log(str)
console.log(typeof(str))


localStorage.setItem('loggeduser', JSON.stringify(user))

//localStorage.removeItem('loggeduser')
let myUser= JSON.parse(localStorage.getItem('loggeduser')) || {username:'Guest'}
console.log(`Welcome ${myUser.username}`)

var x= 0 && 10 && "Apple"
console.log(x)

