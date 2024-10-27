let clickerCounter = parseInt(document.getElementById('clicker__counter').innerHTML);
const img = document.getElementById('cookie');

img.onclick = () => {
    clickerCounter += 1;
    document.getElementById('clicker__counter').innerHTML = clickerCounter;
    if (clickerCounter % 2 != 0) {
        img.width += 50;
    } else {
        img.width -= 50;
    }
}

