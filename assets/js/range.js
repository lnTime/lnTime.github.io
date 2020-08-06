(() => {
    const
    range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),
    setValue = () => {
        const
            newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
            newPosition = 10 - (newValue * 0.2);
        rangeV.innerHTML = `<span>${range.value} %</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);

    const
    range1 = document.getElementById('range1'),
    rangeV1 = document.getElementById('rangeV1'),
    setValue1 = () => {
        const
            newValue = Number((range1.value - range1.min) * 100 / (range1.max - range1.min)),
            newPosition = 10 - (newValue * 0.2);
        rangeV1.innerHTML = `<span>${range1.value} %</span>`;
        rangeV1.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
    document.addEventListener("DOMContentLoaded", setValue1);
    range1.addEventListener('input', setValue1);

})();