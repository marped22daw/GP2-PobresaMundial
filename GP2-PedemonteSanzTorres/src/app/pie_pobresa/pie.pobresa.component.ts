import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import PobresamundialJson from '../json/pobmundial.json';

@Component({
  selector: 'app-pie-pobresa',
  templateUrl: './pie.pobresa.component.html',
  styleUrls: ['./pie.pobresa.component.css']
})
export class PieComponentPobresa implements OnInit {
  
  private data = PobresamundialJson.filter(function(d) { return d.Continent; });
  private data2 = PobresamundialJson.filter(function(d) { return d.Continent; });
  private svg;
  private svg2;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
}

private createSvg2(): void {
  this.svg2 = d3.select("figure#pie2")
  .append("svg")
  .attr("width", this.width)
  .attr("height", this.width)
  .append("g")
  .attr(
    "transform",
    "translate(" + this.width / 2 + "," + this.height / 2 + ")"
  );
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Continent.toString()))
  .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}

private drawChart(): void {
  // Compute the position of each group on the pie:
  //filtrar solo los paises que tienen un valor de Adult_Mortality menor a 40
  const pie = d3.pie<any>().value((d: any) => Number(d.Continent));
  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d, i) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('text')
  //filtrar solo los mayores a 50
  .filter(function(d) { return d.data.Continent; })
  .text(d => d.data.Poblacio_2020+ " ("+d.data.Continent+")")
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

private drawChart2(): void {
  // Compute the position of each group on the pie:
  //filtrar solo los paises que tienen un valor de Adult_Mortality menor a 40
  const pie = d3.pie<any>().value((d: any) => Number(d.Poblacio_2022));
  // Build the pie chart
  this.svg2
  .selectAll('pieces')
  .data(pie(this.data2))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d, i) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg2
  .selectAll('pieces')
  .data(pie(this.data2))
  .enter()
  .append('text')
  .filter(function(d) { return d.data.Poblacio_2022; })
  .text(d => d.data.Continent+ " ("+d.data.Poblacio_2022+")")
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createSvg2();
    this.createColors();
    this.drawChart();
    this.drawChart2();
  }

}
