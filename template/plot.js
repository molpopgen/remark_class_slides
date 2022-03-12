x = [1, 2, 3, 4];

data = x.map(function (i) {return {x: i, y: i*i} });

var options = {
    height: 200,
    width: 200,
    marks: [Plot.dot(data,{x:"x", y:"y"})]
};

// Draw the plot
document.getElementById("fig1")
        .appendChild(Plot.plot(options));
