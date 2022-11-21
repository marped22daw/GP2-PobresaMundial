import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import PobresamundialJson from '../json/pobmundial.json';

@Component({
  selector: 'app-bar-pobresa',
  templateUrl: './bar.pobresa.component.html',
  styleUrls: ['./bar.pobresa.component.css']
})
export class BarComponentPobresa implements OnInit {

  private svg:any;
  private margin = 100;
  private width = ((window.innerWidth * 90)/100) - (this.margin * 2);
  private height = ((window.innerHeight * 80)/100) - (this.margin * 2);
  private colors;
  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    // .domain(this.data2.map(d => d.Adult_Mortality.toString()))
    .range(["#100C2E", "#22256D", "#333CA5", "#4554E1"]);
  }
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.PobresamundialJson))
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
    .domain([0, 3])
    .range([this.height, 0]);
  
    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));
  
    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.PobresamundialJson))
    .attr("y", d => y(d.Stars))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.Stars))
    .attr("fill", (d, i) => (this.colors(i)));
  }

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    //this.drawBars(this.data);
    this.drawBars(PobresamundialJson
      .slice(20, 60)

      .map(d => {
        return {
          PobresamundialJson: d.Pais,
          Stars: d.Poblacio_Mundial
        };
        }));
  }
}
