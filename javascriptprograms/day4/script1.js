function celebrateBirthday(mainCourse, dessert)
{
    console.log(`We have eaten ${mainCourse}`)
    dessert()
}

function icecreamShop()
{
    console.log("We have eaten Icecream")
}



celebrateBirthday('Biryani', icecreamShop)