let kills = parseInt(document.getElementById('dead').innerHTML);
let loses = parseInt(document.getElementById('lost').innerHTML);

function checkHit(hole) {
    if (hole != null) {
        if (hole.className.includes('hole hole_has-mole') ) {
            kills += 1;
            document.getElementById('dead').innerHTML = kills;
            if (kills === 10) {
                alert(`Победа!`)
                window.location.reload();
            }
        } else {
            loses += 1;
            document.getElementById('lost').innerHTML = loses;
            if (loses === 5) {
                alert(`Поражение!`)
                window.location.reload(); 
            }
        }
    }
};

document.addEventListener('click', function(event) {
        let hole = document.getElementById(event.target.id);
        checkHit(hole);
});


