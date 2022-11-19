import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import FertilitatJson from '../json/fertilitat.json';

@Component({
  selector: 'app-scatter-fertilitat',
  templateUrl: './scatter.fertilitat.component.html',
  styleUrls: ['./scatter.fertilitat.component.css']
})
export class ScatterComponent implements OnInit {

  private data = FertilitatJson;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawPlot(): void {
  // Add X axis
  const x = d3.scaleLinear()
  .domain([2010, 2022])
  .range([ 0, this.width ]);
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 7])
  .range([ this.height, 0]);
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  const dots = this.svg.append('g');
  dots.selectAll("dot")
  .data(this.data)
  .enter()
  .append("circle")
  .attr("cx", d => x(d.any2020))
  .filter(d => d.Country)
  .attr("cy", d => y(d.Country))
  .attr("r", 7)
  .style("opacity", .5)
  .style("fill", "#69b3a2");

  // Add labels
  dots.selectAll("text")
  .data(this.data)
  .enter()
  .append("text")
  //filtrar los paises mayores a 150 muertes
  .filter(d => d.Country )
  .text(d => d.Country)
  .attr("x", d => x(d.any2020))
  .attr("y", d => y(d.Country))
}

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot();
  }

}
