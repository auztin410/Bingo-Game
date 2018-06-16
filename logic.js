
var bingoLibrary = ["Laser Focused", "Risk Averse", "Mission Critical", "Heads Up", "Result Drive", "Take Away", "Bandwidth", "Strategic Fit", "Paradigm Shift", "Incenctivize", "Move The Needle", "Drill Down", "Deep Dive", "Holistic Approach", "Streamline", "Win-Win", "Globalization", "ROI", "Cultural", "Enterprise Solution", "Initiative", "Forward-Thinking", "Fiscal Resposibility", "Intuitive", "Dynamic", "Metric", "Vetting", "Alignment", "Customer-Facing", "Onboarding", "Engaged", "Globally", "Interactive", "Outside The Box", "Synergy", "Granular", "Human Capital", "Organic Growth", "Verticals", "Core Competency", "Scalable", "Value-Add", "Pipeline", "Change The Conversation", "Innovative", "Leveraging", "Deliverable", "Sync", "Diversity", "Collaborate", "Dynamic", "Ramp Up", "Functionality", "Ideation", "Robust", "Core Value", "Transparency"]

var upLeft = 0;
var upMiddle = 0;
var upRight = 0;
var left = 0;
var middle = 0;
var right = 0;
var downLeft = 0;
var downMiddle = 0;
var downRight = 0;

$("#button").on("click", function () {
    var upLeft = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("topLeft").innerHTML = upLeft;

    var upMiddle = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("topMiddle").innerHTML = upMiddle;

    var upRight = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("topRight").innerHTML = upRight;

    var left = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("middleLeft").innerHTML = left;

    var middle = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("middleMiddle").innerHTML = middle;

    var right = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("middleRight").innerHTML = right;

    var downLeft = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("bottomLeft").innerHTML = downLeft;

    var downMiddle = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("bottomMiddle").innerHTML = downMiddle;

    var downRight = bingoLibrary[Math.floor(Math.random() * bingoLibrary.length)];
    document.getElementById("bottomRight").innerHTML = downRight;


});

