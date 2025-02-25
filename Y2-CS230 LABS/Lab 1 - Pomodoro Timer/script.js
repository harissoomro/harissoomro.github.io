

const timer = document.getElementById("timer");
const pauseBtn = document.getElementById("pauseBtn");
//Apple bites consisting of yellow and blue(background-color) circles

const yellowLeft = document.getElementById("yellowLeft");
const aquaLeft = document.getElementById("aquaLeft");
const yellowLeft2 = document.getElementById("yellowLeft2");
const aquaLeft2 = document.getElementById("aquaLeft2");
const yellowRight = document.getElementById("yellowRight");
const aquaRight = document.getElementById("aquaRight");
const yellowRight2 = document.getElementById("yellowRight2");
const aquaRight2 = document.getElementById("aquaRight2");
const seed1 = document.getElementById("seed1");

//alert
const alert1 =document.getElementById("alert");

let clock = null;
// Total Timer time in milliseconds set to 25 mins
let totalTime = 25 * 60 * 1000;
let timeLeft = totalTime;
let isRunning = false;


function start(){
    if(!isRunning){
        // Run update function every 10 ms
        clock = setInterval(update, 10);
        alert1.style.opacity = "0";
        isRunning = true;

    }
}


function stop(){
    //Resets the timer back to default settings
    timeLeft = totalTime;
    timer.textContent = `00:25:00.00`;
    timer.style.color = "white";
    timer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    timer.style.border = null;
    timer.style.borderRadius = null;
    timer.style.opacity = "1";
    
    // Stops the timer
    isRunning = false;
    clearInterval(clock);

    //Resets apple to full apple by hiding bites
    aquaLeft.style.opacity = "0";
    yellowLeft.style.opacity = "0";
    aquaRight.style.opacity = "0";
    yellowRight.style.opacity = "0";
    aquaLeft2.style.opacity = "0";
    yellowLeft2.style.opacity = "0";
    aquaRight2.style.opacity = "0";
    yellowRight2.style.opacity = "0";
    seed1.style.opacity = "0";
    alert1.style.opacity = "0";
}

function pause(){
    if(isRunning){
        clearInterval(clock);
        isRunning = false;
        pauseBtn.textContent = `Resume`;
        }
    else
    {
        clock = setInterval(update, 10);
        isRunning = true;
        pauseBtn.textContent = `Pause`;
    }
}

function update(){
    
    timeLeft -= 10;
    if (timeLeft <= 0) {
        clearInterval(clock);  
        timeLeft = 0;  
        isRunning = false;
        alert1.style.opacity = "1";
    }
    
    updateBites();
    
    //conversion from milliseconds with padding zeros
    let hours = Math.floor(timeLeft / (1000 * 60 * 60)).toString().padStart(2,0);
    let minutes = Math.floor(timeLeft / (1000 * 60) % 60).toString().padStart(2,0);
    let seconds = Math.floor(timeLeft / 1000 % 60).toString().padStart(2,0);
    let milliseconds = Math.floor(timeLeft % 1000 / 10).toString().padStart(2,0);

    if(minutes < 1){
    
        timer.style.color = "Red";
        timer.style.backgroundColor = "white";
        timer.style.border = "10px solid red";
        timer.style.borderRadius = "25px";
        timer.style.opacity = "1";

    } else{
        timer.style.color = "white";
    }
    
    timer.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}
function updateBites(){
    // Converts total time and time passed into minutes
    let totalMinutes = Math.floor(totalTime/ (1000 * 60) % 60);
    let minutesElapsed = totalTime - timeLeft;
    minutesElapsed = Math.floor(minutesElapsed / (1000 * 60) % 60);
    // put opacity to one to do one bite at 20 percent intervals
    if(minutesElapsed > totalMinutes * 0.20){
        aquaLeft.style.opacity = "1";
        yellowLeft.style.opacity = "1";
        
    }
    if(minutesElapsed > totalMinutes * 0.40){
        aquaRight.style.opacity = "1";
        yellowRight.style.opacity = "1";
        
        }
    if(minutesElapsed >totalMinutes * 0.60) {
        aquaRight2.style.opacity = "1";
        yellowRight2.style.opacity = "1";
        
    }
    if(minutesElapsed > totalMinutes * 0.80){
        aquaLeft2.style.opacity = "1";
        yellowLeft2.style.opacity = "1";
        seed1.style.opacity = "1";
    }
    
}
