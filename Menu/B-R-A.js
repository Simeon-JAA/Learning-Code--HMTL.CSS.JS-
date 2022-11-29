//defning array of baking recipies
let bakeArray = [{
    Bake: 'Cupcakes',
    //Img: TOFIND 
    Flavour: 'Vanilla',
    Prep: '1 hour',
    Description: 'These cupcakes will take you away into a'
}, {
    Bake: 'Cake',
    //Img: TOFIND 
    Flavour: 'Vanilla',
    Prep: '2 hours',
    Description: 'Stacking these vanilla sponge bakes, married with the rich american buttercream will give you a stacked delicasy so share with ...'
}, {
    Bake: 'Cookies',
    //Img: TOFIND
    Flavour: 'Chocolate & Orange',
    Prep: '45 mins',
    Description: 'Cookie description'
}, {
    Bake: 'Swiss Roll',
    //Img: TOFIND,
    Flavour: 'Baileys & Vanilla',
    Prep: '1 hour',
    Description: 'Swiss Roll desc'
}, {
    Bake: 'Apple Crumble',
    //Img: TOFIND,
    Flavour: ' ',
    Prep: '90 minutes',
    Description: 'Apple Crumble description'
}]

//defining variables & containers:
let arrayNumber = 0;
const btns = document.querySelectorAll('.btn');

let descriptionContainer = document.querySelector('.description-container');
let imgContainer = document.querySelector('.img-container');
let titleFlavourContainer = document.querySelector('.title-flavour-container');

btns.forEach(function(button) {
    button.addEventListener('click', function (event) {
        let styles = event.currentTarget.classList;
            //previous button
            if (styles.contains('prev')){
                arrayNumber--;
                if (arrayNumber < 1) {
                    arrayNumber = bakeArray.length - 1;
                    return render(arrayNumber);
                }
                render(arrayNumber);

            }
            //Next button
            else if (styles.contains('next')){
                arrayNumber++;
                if (arrayNumber > bakeArray.length - 1) {
                    arrayNumber = 0
                    return render(arrayNumber);
                };
                render(arrayNumber);
            }
            //random button
            else if (styles.contains('random')){
                let randomArrayNum = Math.floor(Math.random() * bakeArray.length);
                console.log(randomArrayNum);
                render(randomArrayNum);


            }
    });
    
});

function render(input) {
    titleFlavourContainer.textContent = bakeArray[input].Bake + ' ' + bakeArray[input].Flavour;
    descriptionContainer.textContent = bakeArray[input].Description
}