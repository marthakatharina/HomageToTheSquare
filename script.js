setTimeout(function () {
    alert(
        'Welcome to the "Josef Albers, Homage to the Square" color pallete creator! \nClick on any of the squares and enter a rgb color value.'
    );
}, 1000);

var squares = document.querySelectorAll(".square");
var color;

for (var i = 0; i < squares.length; i++) {
    var self = squares[i];
    // console.log(squares[i]);
    self.addEventListener(
        "click",
        function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();

            color = prompt(
                "Enter a color in rgb. \nEnter for each red, green and blue channel any number between 0 and 255 where 0 is black and 255 is white, e.g. rgb(255, 50, 120)",
                "rgb(255, 50, 120)"
            );
            if (color !== null) {
                // alert("You have entered " + color);

                //HEX validation
                var re = /^#([0-9A-F]{3}){1,2}$/i;
                var hexColor = re.test(color);

                // CSS validation
                var s = new Option().style;
                s.color = color;
                var cssColor = s.color == color;

                //RGB validation
                var match = /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/;
                var rgbColor = match.exec(color);

                if (hexColor == true || cssColor == true || rgbColor == true) {
                    e.target.style.backgroundColor = color;
                } else {
                    alert("invalid color");
                }
            } else {
                alert("You did not enter any color.");
            }
        },
        false
    );

    self.addEventListener("mouseover", function (e) {
        if (e.target.style.backgroundColor == color) {
            // console.log(color);

            // Convert rgb to hex
            // Choose correct separator
            let sep = color.indexOf(",") > -1 ? "," : " ";
            // Turn "rgb(r,g,b)" into [r,g,b]
            rgb = color.substr(4).split(")")[0].split(sep);

            let r = (+rgb[0]).toString(16),
                g = (+rgb[1]).toString(16),
                b = (+rgb[2]).toString(16);

            if (r.length == 1) r = "0" + r;
            if (g.length == 1) g = "0" + g;
            if (b.length == 1) b = "0" + b;

            e.target.setAttribute(
                "data-color",
                `${color}  hex: ${"#" + r + g + b}`
            );
        }
    });

    // self.addEventListener("mouseout", function (e) {
    //     if (e.target.style.background == color) {
    //         e.target.removeAttribute("data-tooltip");
    //     }
    // });
}
