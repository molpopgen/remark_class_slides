var svg = d3.select("#Viz_area3").append("svg")

// Add the path using this helper function
svg.append('rect')
  .attr('x', 10)
  .attr('y', 120)
  .attr('width', 800)
  .attr('height', 40)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');

svg.append('rect')
  .attr('x', 10)
  .attr('y', 5)
  .attr('width', 600)
  .attr('height', 40)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');

svg.append('rect')
  .attr('x', 10)
  .attr('y', 450)
  .attr('width', 600)
  .attr('height', 40)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');

