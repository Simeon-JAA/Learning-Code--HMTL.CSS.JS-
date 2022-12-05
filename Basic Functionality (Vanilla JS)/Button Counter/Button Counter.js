//defining variables
let count = +0;
let btns = document.querySelectorAll('.btn');
let value = document.querySelector('#value');
let color = document.querySelectorAll('.color');
let containerAll = document.querySelector('.container-all');
let title = document.querySelector('.title');
let themes = document.querySelector('.themes');


/*page functions:
1. query selector all - calling all buttons to run for each function
2. identify button with class assigned
3. if & else if functions for each class of button 
4. color for function of counter element value
*/
btns.forEach(function(btn){
	btn.addEventListener('click', function(e){
		const btnstyle = e.currentTarget.classList;
				if (btnstyle.contains('increase')){
			count++;
		}		else if (btnstyle.contains('decrease')){
			count--;
		}		else if (btnstyle.contains('reset')){
			count = 0;
		}   else if (btnstyle.contains('random')){
      count = Math.floor(Math.random() * 100);
    }
		value.innerHTML = +count;
	}
	);
})

//colour function




//themes function
color.forEach((theme) => {
  theme.addEventListener('click', (event) => {
    let themes = event.currentTarget.classList;
    if (themes.contains('red')) {
      colourChange('red');
      } else if (themes.contains('blue')) {
      colourChange('blue');
      } else if (themes.contains('green')) {
      colourChange('green');
      } else if (themes.contains('pink')) {
      colourChange('pink');
      }
  })
})

function colourChange (colour){
  containerAll.style.backgroundColor = colour;
  title.style.color = 'dark' + colour;
  themes.style.color = 'dark' + colour;
  if (colour == 'pink') {
    return title.style.color = 'gray'
  }


}