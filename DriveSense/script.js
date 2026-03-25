let drivingMode = false;
let callCount = 0;

const toggleBtn = document.getElementById("toggleDrive");
const resultDiv = document.getElementById("result");

// Toggle Driving Mode
toggleBtn.addEventListener("click", () => {
    drivingMode = !drivingMode;

    if (drivingMode) {
        toggleBtn.innerText = "Driving Mode: ON 🚗";
        toggleBtn.style.background = "green";
        resultDiv.innerHTML = "";
        callCount = 0;
    } else {
        toggleBtn.innerText = "Driving Mode: OFF";
        toggleBtn.style.background = "#007bff";
        resultDiv.innerHTML = "";
        callCount = 0;
    }
});

// Simulate Incoming Call
function incomingCall() {
    if (!drivingMode) {
        resultDiv.innerHTML = "✅ Call Allowed (Not Driving)";
        resultDiv.style.color = "green";
        return;
    }

    callCount++;

    if (callCount === 1) {
        resultDiv.innerHTML = "🚫 Call Blocked! Auto-reply sent: 'I am driving, will call back.'";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = "🚨 Emergency Call Detected! Call Allowed";
        resultDiv.style.color = "green";
    }
}