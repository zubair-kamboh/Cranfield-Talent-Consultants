/** @format */

let strategicHrSupport = document.querySelector('.strategic-hr-support');
let hrOperationSupport = document.querySelector('.hr-operation-support');
let hoverCard1 = document.querySelector('.hover-card-1');
let hoverCard2 = document.querySelector('.hover-card-2');

strategicHrSupport.addEventListener('mouseover', () => {
	hoverCard1.classList.add('show');
});

strategicHrSupport.addEventListener('mouseleave', () => {
	hoverCard1.classList.remove('show');
});

hrOperationSupport.addEventListener('mouseover', () => {
	hoverCard2.classList.add('show');
});

hrOperationSupport.addEventListener('mouseleave', () => {
	hoverCard2.classList.remove('show');
});
