import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import * as d3 from 'd3';
import PobresamundialJson from '../json/pobmundial.json';

@Component({
  selector: 'app-pie-pobresa',
  templateUrl: './pie.pobresa.component.html',
  styleUrls: ['./pie.pobresa.component.css']
})
export class PieComponentPobresa implements OnInit, AfterViewInit {

  private data = PobresamundialJson.filter(d => d.Poblacio_2022 > 200000000);
  private data2 = PobresamundialJson.filter(d => d.Area > 3000000);
  private svg: any;
  private svg2: any;
  private margin = { top: 20, right: 20, bottom: 20, left: 20 };
  private width: number = 0;
  private height: number = 0;
  private radius: number = 0;
  private colors: any;
  private tooltip: any;

  constructor() {
    this.updateDimensions();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createSvg();
      this.createSvg2();
      this.createColors();
      this.drawChart();
      this.drawChart2();
      this.createTooltip();
      this.onResize(); // Calcular el tamaño inicial
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    this.updateDimensions();
    this.updateChart();
    this.updateChart2();
  }

  // Funcion actualizar grafico para adaptarlo a diferentes resoluciones
  private updateDimensions(): void {
    this.width = Math.min(window.innerWidth, 650) * 0.8;
    this.height = this.width;
    this.radius = Math.min(this.width, this.height) / 2 - Math.max(this.margin.top, this.margin.right, this.margin.bottom, this.margin.left);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`);
  }

  private createSvg2(): void {
    this.svg2 = d3.select("figure#pie2")
      .append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`);
  }

  // Colores del gráfico
  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.Continent.toString()))
      .range(["#202265", "#262A79", "#2C338E", "#3944BA", "#4656E5"]);
  }

  // Creación de tooltip
  private createTooltip(): void {
    this.tooltip = d3.select('body').append("div")
      .classed('chart-tooltip', true)
      .style('display', 'none');
  }

  // Función para formatear números con puntos cada tres dígitos
  private formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Propiedades del tooltip
  private addTooltipEvents(selection: d3.Selection<any, any, any, any>, valueField: string, unit: string): void {
    const mouseover = () => {
      this.tooltip.style("display", null);
    };

    const mousemove = (event, d) => {
      const value = this.formatNumber(d.data[valueField]);
      let campoDeDatos = valueField;
      campoDeDatos = (campoDeDatos === "Area") ? "Área" : "Población en 2022";
      this.tooltip.html(`<b>País:</b> ${d.data.Pais}<br><b>${campoDeDatos}</b>: ${value}${unit}`)
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 25) + "px");
    };

    const mouseleave = () => {
      this.tooltip.style("display", "none");
    };

    selection
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }

  // Funcion para generar el primer gráfico pie
  private drawChart(): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.Poblacio_2022));
    const arc = d3.arc().innerRadius(0).outerRadius(this.radius);
    const labelLocation = d3.arc().innerRadius(Math.min(100, this.radius * 0.8)).outerRadius(this.radius);

    const slices = this.svg.selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => this.colors(i))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px")
      .style("cursor", "pointer");

    this.addTooltipEvents(slices, 'Poblacio_2022', ' habitantes');

    this.svg.selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .filter(d => d.data.Poblacio_2022)
      .text(d => `${d.data.Pais}`)
      .attr("transform", d => `translate(${labelLocation.centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", "15px")
      .style("fill", "#6ec2ff");
  }

  // Funcion para generar el segundo gráfico pie
  private drawChart2(): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.Area));
    const arc = d3.arc().innerRadius(0).outerRadius(this.radius);
    const labelLocation = d3.arc().innerRadius(Math.min(100, this.radius * 0.8)).outerRadius(this.radius);

    const slices = this.svg2.selectAll('pieces')
      .data(pie(this.data2))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => this.colors(i))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px")
      .style("cursor", "pointer");

    this.addTooltipEvents(slices, 'Area', ' km²');

    this.svg2.selectAll('pieces')
      .data(pie(this.data2))
      .enter()
      .append('text')
      .filter(d => d.data.Area)
      .text(d => `${d.data.Pais}`)
      .attr("transform", d => `translate(${labelLocation.centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", "15px")
      .style("fill", "#6ec2ff");
  }

  // Funciones actualizar graficos para adaptarlos a diferentes resoluciones
  private updateChart(): void {
    d3.select("figure#pie svg").remove();
    this.createSvg();
    this.drawChart();
  }

  private updateChart2(): void {
    d3.select("figure#pie2 svg").remove();
    this.createSvg2();
    this.drawChart2();
  }
}
