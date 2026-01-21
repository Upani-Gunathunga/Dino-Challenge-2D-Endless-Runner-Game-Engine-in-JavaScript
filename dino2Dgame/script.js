// SOUND ANIMATION

var rs = new Audio("run.mp3");

rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");

var bs= new Audio("pink-panther-theme.mp3");
bs.loop=true;
var ws= new Audio("mixkit-game-level-completed-2059.wav");
var os= new Audio("mixkit-arcade-game-opener-222.wav");
os.loop= true;
os.play();

// IDLE
ilw= setInterval(idle,100);


// KEY EVENTS

function key(event) {
  

    
    if (event.which == 13) {
        document.getElementById("start").style.visibility="hidden";
        bs.play();
        os.pause();
        clearInterval(ilw);


        if (rw == 0) {
            rw = setInterval(run, 110);
            rs.play();

            fid = f();
            fw = setInterval(movef, 100);

            bgw = setInterval(backg, 100);
            sw = setInterval(score, 500);
        }
    }
    if (event.which == 32) {

        document.getElementById("start").style.visibility="hidden";
        bs.play();
        os.pause();
        clearInterval(ilw);

        if (jw == 0) {
            clearInterval(rw);
            rs.pause();

            jw = setInterval(jump, 100);
            js.play();

        }
    }

}

// FLAME ANIMATION

var fid = 0;
var fw = 0;
var u = 1000;

function f() {
    for (var y = 0; y < 10; y++) {
        var i = document.createElement("img");
        i.src = "hola-icegif-23.gif";

        i.className = "f";
        i.style.marginLeft = u + "px";
        i.id = "d" + y;

        document.getElementById("bg").appendChild(i);
        u = u + 500;
    }
}

// MOVING FLAME ANIMATION

function movef() {
    for (var y = 0; y < 10; y++) {

        var z = getComputedStyle(document.getElementById("d" + y));

        var w = parseInt(z.marginLeft) - 20;

        document.getElementById("d" + y).style.marginLeft = w + "px";

        // -40  100

        if (w >= -27 & w <= 95) {

            if (mt > 295) {

                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                jw = -1;

                clearInterval(fw);

                clearInterval(bgw);

                clearInterval(sw);

                dw = setInterval(dead, 100);
                ds.play();

            }
        }
    }
}

// RUN ANIMATION

var rw = 0;
var r = 1;
var i = document.getElementById("dino");

function run() {

    r = r + 1;

    if (r == 9) {
        r = 1;
    }

    i.src = "Run (" + r + ").png"
}

var j = 1;
var jw = 0;

var mt = 385;

// JUMP ANIMATION

function jump() {

    if (j <= 6) {
        mt = mt - 30;
    }

    if (j >= 7) {
        mt = mt + 30;
    }

    i.style.marginTop = mt + "px";

    j = j + 1;

    if (j == 13) {
        j = 1;

        clearInterval(jw);

        rw = setInterval(run, 110);
        rs.play();

        jw = 0;

        if (fid == 0) {
            fid = f();
        }

        if (fw == 0) {
            fw = setInterval(movef, 100);
        }

        if (bgw == 0) {
            bgw = setInterval(bg, 100);
        }

        if (sw == 0) {
            sw = setInterval(score, 500);
        }

    }

    i.src = "Jump (" + j + ").png"

}

// BACKGROUND ANIMATION

var bg = 0;
var bgw = 0;

function backg() {
    bg = bg - 20;

    document.getElementById("bg").style.backgroundPositionX = bg + "px";
}

// SCORE ANIMATION
var sw = 0;
var a = 0;
function score() {
    a = a + 5;
    document.getElementById("score").innerHTML = "Your Score:" + a;

    if (a == 280){
        document.getElementById("won").style.visibility="visible";
        rs.pause();
        ws.play();
        bs.pause();
        
    }
    

}

// DEAD ANIMATION

var dw = 0;
var d = 1;

function dead() {

    d = d + 1;
    if (d == 9) {
        d = 8;

        i.style.marginTop = "385px";
        document.getElementById("end").style.visibility="visible";
        document.getElementById("endscore").innerHTML=a;
        
    }
    i.src = "Dead (" + d + ").png"

}

// RELOAD 

function re(){
    location.reload();
}

// IDLE ANIMATION

 var il= 1;
 var ilw=0;
 
function idle(){
    il=il+1;
    if (il==11){
        il=1;
    }

    document.getElementById("idle").src="Idle ("+il+").png"
    
}




