setTimeout(function () {
    alert(
        'Welcome to the "Josef Albers, Homage to the Square" color pallete creator!\nClick on any of the squares and enter a color value.'
    );
}, 1000);

var squares = document.querySelectorAll(".square");
var color;

for (var i = 0; i < squares.length; i++) {
    var self = squares[i];

    self.addEventListener(
        "click",
        function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();

            color = prompt(
                "Enter a color in Hex or RGB or color name (e.g. #FF0000 or RGB(255,0,0) or Red are all red)",
                ""
            );

            e.target.style.background = color;
            alert("You have entered " + color);
        },
        false
    );
}
