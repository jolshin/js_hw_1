let countdown = document.getElementById('timer').innerHTML;


function loop() {
    setTimeout(function() {
        countdown -= 1;
        document.getElementById('timer').innerHTML = countdown;
        if (countdown !== 0) {
            loop();
        } else {
            alert(`Вы победили в конкурсе!`);
        }
    }, 1000);
}

loop();
