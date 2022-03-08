function draw_example_pedigree_with_disease(svg) {
    height = svg.style("height");
    width = svg.style("width");

    console.log(height);
    // Parents

    father = svg.append("rect")
        .attr("x", "33%")
        .attr("y", "10%")
        .attr("width", 50)
        .attr("height", 50)
        .attr("stroke", "black")
        .attr("fill", "#ffffff");

    mother = svg.append("circle")
        .attr('cx', "66%")
        .attr('cy', "15%")
        .attr("r", 25)
        .attr("stroke", "black")
        .attr("fill", "#ffffff");

    // children

    //svg.append("rect")
    //    .attr("x", 0)
    //    .attr("y", 0)
    //    .attr("width", width)
    //    .attr("height", height)
    //    .attr("fill", "#69a3b2")
    //    .attr("stroke", "black");
}
