import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import EspervidaJson from '../json/espervida.json';

@Component({
  selector: 'app-bar-espervida',
  templateUrl: './bar.espervida.component.html',
  styleUrls: ['./bar.espervida.component.css']
})
export class BarComponentEspervida implements OnInit {

  private svg:any;
  private margin = 50;
  private width = ((window.innerWidth * 90)/100)  - (this.margin * 2);
  private height = ((window.innerHeight * 80)/100) - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.EspervidaJson))
    .padding(0.2);
  
    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  
    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 100])
    .range([this.height, 0]);
  
    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));
  
    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.EspervidaJson))
    .attr("y", d => y(d.Stars))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.Stars))
    .attr("fill", "#d04a35");
  }

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(EspervidaJson
      .slice(60, 200)
      .map(d => {
        return {
          EspervidaJson: d.Pais,
          Stars: d.Espervida
        };
        }));
  }
}
