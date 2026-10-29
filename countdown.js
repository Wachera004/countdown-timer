let timer;

function startCountdown(){
    clearInterval(timer);
    let count=10;
    myDisplayer(count);

    timer = setInterval(function() {
        count--;
        myDisplayer(count);
        if (count === 0) {
            clearInterval(timer);
            myDisplayer(" finished!");
        }
    }, 1000);
}

function myDisplayer(text) {
    let demo= document.getElementById("demo");
    demo.innerHTML = text;
}