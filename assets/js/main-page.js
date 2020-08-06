(() => {
    const handleAnimationStart = (e) => {
        let box = e.target;
        while (!box.classList.contains('__box')) {
            box = box.parentNode;
        }
        box.querySelector('.cross').style.opacity = '1';
        box.querySelector('._free').style.opacity = '1';
        box.querySelector('._blue').classList.add('blue_free')
    }
    const handleAnimationEnd = e => {
        let box = e.target;
        while (!box.classList.contains('__box')) {
            box = box.parentNode;
        }
        box.querySelector('.cross').style.opacity = '0';
        box.querySelector('._free').style.opacity = '0';
        box.querySelector('._blue').classList.remove('blue_free')
    }
    const boxes = document.querySelectorAll('.__box');
    for (let i = 0; i < boxes.length; i++) {
        const span = document.createElement('span');
        span.classList.add('_free');
        span.textContent = 'Free';
        const div = document.createElement('div');
        div.appendChild(document.createElement('div'));
        div.appendChild(document.createElement('div'));
        div.classList.add('cross');
        boxes[i].appendChild(span);
        boxes[i].appendChild(div);
        boxes[i].addEventListener('mouseover', handleAnimationStart);
        boxes[i].addEventListener('mouseout', handleAnimationEnd)
    }
})();