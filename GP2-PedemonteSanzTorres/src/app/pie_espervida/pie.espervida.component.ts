import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import EspervidaJson from '../json/espervida.json';

@Component({
  selector: 'app-pie-espervida',
  templateUrl: './pie.espervida.component.html',
  styleUrls: ['./pie.espervida.component.css']
})
export class PieComponent implements OnInit {
  
  private data = EspervidaJson.filter(function(d) { return d.Adult_Mortality < 7; });
  private data2 = EspervidaJson.filter(function(d) { return d.Adult_Mortality > 590; });
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
  .domain(this.data.map(d => d.Adult_Mortality.toString()))
  .range(["#202265","#262A79", "#2C338E", "#3944BA", "#4656E5"]);
}

private drawChart(): void {
  // Compute the position of each group on the pie:
  //filtrar solo los paises que tienen un valor de Adult_Mortality menor a 40
  const pie = d3.pie<any>().value((d: any) => Number(d.Adult_Mortality));
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
  .filter(function(d) { return d.data.Adult_Mortality; })
  .text(d => d.data.Pais+ " ("+d.data.Adult_Mortality+")")
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

private drawChart2(): void {
  // Compute the position of each group on the pie:
  //filtrar solo los paises que tienen un valor de Adult_Mortality menor a 40
  const pie = d3.pie<any>().value((d: any) => Number(d.Adult_Mortality));
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
  .filter(function(d) { return d.data.Adult_Mortality; })
  .text(d => d.data.Pais+ " ("+d.data.Adult_Mortality+")")
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
