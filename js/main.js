const btns = document.querySelectorAll('li');
const frame = document.querySelector('section');
const txt = frame.querySelector('span');
const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

btns.forEach((el, index) => {
	el.addEventListener('click', () => {
		frame.style.backgroundImage = `url(../img/model.png), url(../img/${imgs[index]})`;
		for (let el of btns) el.classList.remove('on');
		btns[index].classList.add('on');
	});
});
