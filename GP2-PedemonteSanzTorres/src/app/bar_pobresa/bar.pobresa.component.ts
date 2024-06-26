import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import PobresamundialJson from '../json/pobmundial.json';

@Component({
  selector: 'app-bar-pobresa',
  templateUrl: './bar.pobresa.component.html',
  styleUrls: ['./bar.pobresa.component.css']
})
export class BarComponentPobresa implements OnInit, AfterViewInit {

  private svg: any;
  private margin = { top: 20, right: 30, bottom: 40, left: 40 };
  private width: number = 0;
  private height: number = 0;
  private colors: any;
  private tooltip: any;
  currentPage: number = 1;
  private itemsPerPage: number = 15;
  public totalPages: number = 0;
  dataToShow: any[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.updateChartDimensions();
    this.calculateTotalPages();
    this.updateDataToShow();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createSvg();
      this.createColors();
      this.createTooltip();
      this.drawBars();
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateChartDimensions();
    this.calculateTotalPages();
    this.validateCurrentPage();
    this.updateChart();
  }

  // Funcion actualizar grafico para adaptarlo a diferentes resoluciones
  private updateChartDimensions(): void {
    const element = this.elRef.nativeElement.querySelector('figure#bar');
    this.width = element.clientWidth - this.margin.left - this.margin.right;
    this.height = element.clientHeight - this.margin.top - this.margin.bottom;
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  // Colores del gráfico
  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .range(["#100C2E", "#22256D", "#333CA5", "#4554E1"]);
  }
  // Creación de tooltip
  private createTooltip(): void {
    this.tooltip = d3.select('body').append("div")
      .classed('chart-tooltip', true)
      .style('display', 'none');
  }

  // Propiedades del tooltip
  private addTooltipEvents(selection: d3.Selection<any, any, any, any>, valueField: string): void {
    const mouseover = () => {
      this.tooltip.style("display", null);
    };

    const mousemove = (event, d) => {
      this.tooltip.html(`<b>País:</b> ${d.PobresamundialJson}<br><b>Población Mundial</b>: ${d.Stars}%`)
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

  private calculateTotalPages(): void {
    const filteredData = PobresamundialJson.filter(d => Number(d.Poblacio_Mundial) >= 1);
    const maxItemsPerPage = this.getMaxItemsPerPage();
    this.totalPages = Math.ceil(filteredData.length / maxItemsPerPage);
  }

  // Lógica de la paginación del gráfico
  private updateDataToShow(): void {
    const maxItemsPerPage = this.getMaxItemsPerPage();
    const startIndex = (this.currentPage - 1) * maxItemsPerPage;
    const endIndex = startIndex + maxItemsPerPage;

    const filteredData = PobresamundialJson
      .filter(d => Number(d.Poblacio_Mundial) >= 1)
      .map(d => ({
        PobresamundialJson: d.Pais,
        Stars: Number(d.Poblacio_Mundial)
      }));

    this.dataToShow = filteredData.slice(startIndex, endIndex);
  }

  // Fución que ajusta el numero de barras del grafico dependiendo de la resolución
  private getMaxItemsPerPage(): number {
    if (this.width < 400) {
      return 5;
    } else if (this.width < 600) {
      return 7; 
    } else {
      return this.itemsPerPage;
    }
  }

  // Funcion para generar las barras de los graficos
  private drawBars(): void {
    this.svg.selectAll('*').remove();

    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(this.dataToShow.map(d => d.PobresamundialJson))
      .padding(0.2);

    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.dataToShow, d => d.Stars) as number])
      .range([this.height, 0]);

    this.svg.append("g")
      .call(d3.axisLeft(y));

    const bars = this.svg.selectAll("bars")
      .data(this.dataToShow)
      .enter()
      .append("rect")
      .attr("x", d => x(d.PobresamundialJson))
      .attr("y", d => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", d => this.height - y(d.Stars))
      .attr("fill", (d, i) => this.colors(i))
      .style("cursor", "pointer");

    this.addTooltipEvents(bars, 'Índice de Población');
  }

  private validateCurrentPage(): void {
    const maxItemsPerPage = this.getMaxItemsPerPage();
    const filteredData = PobresamundialJson.filter(d => Number(d.Poblacio_Mundial) >= 1);
    this.totalPages = Math.ceil(filteredData.length / maxItemsPerPage);

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    } else if (this.currentPage < 1) {
      this.currentPage = 1;
    }
  }

  // F
  private updateChart(): void {
    this.updateDataToShow();
    this.drawBars();
  }

  // Paginator
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateChart();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateChart();
    }
  }
}
