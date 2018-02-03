/* ==========================================================================
       Creates our panel by utlizing the properties of the canvas class
   ========================================================================== */

const panel = d3
  .select("div")
  .append("svg")
  .attr("class", "canvas");

/* ==========================================================================
       Enables the circle to transition back and forth across the canvas
    ========================================================================== */

function circleLoop() {
  // Creates a starting point for the circle.
  const circle = panel
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 100)
    .attr("r", 20);
  loop();

  // Then loop through spicified points
  function loop() {
    circle
      .transition()
      .attr("cx", 350)
      .duration(2000)
      .transition()
      .attr("cx", 50)
      .duration(2000)
      .on("end", loop);
  }
}

circleLoop();
