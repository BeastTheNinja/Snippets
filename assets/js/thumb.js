let mainImage = document.getElementById('mainImage')

let smallImageOne = document.getElementById('imgOne')
let smallImageTwo = document.getElementById('imgTwo')
let smallImageThree = document.getElementById('imgThree')
let smallImageFour = document.getElementById('imgFour')





smallImageOne.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageOne.src


    mainImage.src = smallImageUrl
    smallImageOne.src = bigImageUrl

})


smallImageTwo.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageTwo.src


    mainImage.src = smallImageUrl
    smallImageTwo.src = bigImageUrl

})

smallImageThree.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageThree.src


    mainImage.src = smallImageUrl
    smallImageThree.src = bigImageUrl

})

smallImageFour.addEventListener('click', function (event) {

    let bigImageUrl = mainImage.src
    let smallImageUrl = smallImageFour.src


    mainImage.src = smallImageUrl
    smallImageFour.src = bigImageUrl

})