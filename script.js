var canvas = document.getElementById('mycanvas');
var ca = canvas.getContext('2d');
canvas.addEventListener("mousedown", functionToBeExecuted, false);


var setUp = {
    makeGrass: function() {
        for (var i = 0; i <= 500; i += 10) {
            ca.beginPath();
            ca.moveTo(i, 300);
            ca.lineTo(i + 5, Math.floor(Math.random() * 40) + 2);
            ca.lineTo(i + 10, 300);
            ca.fillStyle = '#57D05D';
            ca.fill();
        }
    },
    makeBug: function() {
        //bottom line
        ca.beginPath();
        ca.moveTo(100, 100);
        ca.lineTo(120, 98);
        ca.lineTo(138, 101);
        ca.stroke();
        ca.closePath();
        //main body outline
        ca.beginPath();
        ca.moveTo(103, 100);
        ca.arc(116, 100, 10, 0, 2.8, true);
        ca.fillStyle = '#F7ECC2';
        ca.fill();
        //curly antennae
        ca.beginPath();
        ca.moveTo(111, 90);
        ca.bezierCurveTo(110, 86, 105, 82, 100, 83);
        ca.stroke();
        ca.closePath();
        ca.beginPath();
        ca.moveTo(120, 90);
        ca.bezierCurveTo(121, 86, 126, 82, 131, 83);
        ca.stroke();
        ca.closePath();
        //eyes
        ca.beginPath();
        ca.arc(112, 95, 1.5, 0, 2 * Math.PI);
        ca.fillStyle = 'black';
        ca.fill();
        ca.beginPath();
        ca.arc(118, 94.5, 1.5, 0, 2 * Math.PI);
        ca.fill();
        //wings
        ca.beginPath();
        ca.moveTo(103, 100);
        ca.lineTo(109, 92);
        ca.lineTo(110, 100);
        ca.fillStyle = 'red';
        ca.fill();
        ca.beginPath();
        ca.moveTo(131, 100);
        ca.lineTo(122, 90);
        ca.lineTo(122, 100);
        ca.fillStyle = 'red';
        ca.fill();
    },
};

setUp.makeGrass();
setUp.makeBug();


function functionToBeExecuted(event) {
    var xClick = event.pageX;
    var yClick = event.pageY;
    console.log('you clicked here: x= ' + xClick + ' y= ' + yClick);
    ca.clearRect(100, 80, 40, 35);
    setUp.makeGrass();
}