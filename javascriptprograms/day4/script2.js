function celebrateBirthday(mainCourse, dessert)
{
    console.log(`We have eaten ${mainCourse}`)
    dessert('Vanila')
}

function icecreamShop(value)
{
    console.log(`We have eaten ${value} icecream`)
}



celebrateBirthday('Biryani', icecreamShop)