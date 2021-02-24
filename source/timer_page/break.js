function displayBreakComplete(){
    document.getElementById('breakCompleteModal').style.display = 'block';
}

function continueTask(){
    document.getElementById('breakCompleteModal').style.display = 'none';
    document.body.style.backgroundImage = 'linear-gradient(to right,#E0EAFC,#CFDEF3)';
    document.getElementById("currTask").innerHTML = "Task";
    document.getElementById("button-container").style.display = 'flex';
    start(0,59);
}

function changeTask(){
    document.getElementById('breakCompleteModal').style.display = 'none';
    window.location.href="../index.html";
}

function displayShortBreak(){
    document.getElementById('shortBreakModal').style.display = 'block';
}

function startShortBreak(){
    document.getElementById('shortBreakModal').style.display = 'none';
    document.body.style.backgroundImage = 'linear-gradient(to right,#74EBD5,#ACB6E5)';
    document.getElementById("currTask").innerHTML = "Short Break";
    document.getElementById("button-container").style.display = 'none';
    start(0, 59);
}

function displayLongBreak(){
    document.getElementById('longBreakModal').style.display = 'block';
}

function startLongBreak(){
    document.getElementById('longBreakModal').style.display = 'none';
    document.body.style.backgroundImage = 'linear-gradient(to right,#ACB6E5,#74EBD5)';
    document.getElementById("currTask").innerHTML = "Long Break";
    document.getElementById("button-container").style.display = 'none';
    start(0, 59);
}