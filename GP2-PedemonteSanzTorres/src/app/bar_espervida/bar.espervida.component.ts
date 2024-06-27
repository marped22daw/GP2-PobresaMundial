import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import EspervidaJson from '../json/espervida.json';

@Component({
  selector: 'app-bar-espervida',
  templateUrl: './bar.espervida.component.html',
  styleUrls: ['./bar.espervida.component.css']
})
export class BarComponentEspervida implements OnInit, AfterViewInit {

  private svg: any;
  private margin = { top: 20, right: 30, bottom: 40, left: 40 };
  private width: number = 0;
  private height: number = 0;
  private colors: any;
  private tooltip: any;
  currentPage: number = 1;
  private itemsPerPage: number = 72;
  public totalPages: number = 0;
  dataToShow: any[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.calculateTotalPages();
    this.updateDataToShow();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateChartDimensions();
      this.createSvg();
      this.createColors();
      this.createTooltip();
      this.drawBars();
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateChartDimensions();
    this.updateChart();
  }

  private updateChartDimensions(): void {
    const element = this.elRef.nativeElement.querySelector('figure#bar');
    this.width = element.clientWidth - this.margin.left - this.margin.right;
    this.height = element.clientHeight - this.margin.top - this.margin.bottom;
    this.calculateTotalPages();
    this.adjustCurrentPage();
    this.updateDataToShow();
  }

  private createSvg(): void {
    const element = this.elRef.nativeElement.querySelector('figure#bar');
    d3.select(element).select("svg").remove(); // Remove existing SVG if any

    this.svg = d3.select(element)
      .append("svg")
      .attr("width", element.clientWidth)
      .attr("height", element.clientHeight)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .range(["#100C2E", "#22256D", "#333CA5", "#4554E1"]);
  }

  private createTooltip(): void {
    this.tooltip = d3.select('body').append("div")
      .classed('chart-tooltip', true)
      .style('display', 'none');
  }

  private addTooltipEvents(selection: d3.Selection<any, any, any, any>): void {
    const mouseover = () => {
      this.tooltip.style("display", null);
    };

    const mousemove = (event, d) => {
      this.tooltip.html(`<b>País:</b> ${d.EspervidaJson}<br><b>Esperanza de vida:</b> ${d.Stars} años`)
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
    const maxItemsPerPage = this.getMaxItemsPerPage();
    this.totalPages = Math.ceil(EspervidaJson.length / maxItemsPerPage);
  }

  private updateDataToShow(): void {
    const maxItemsPerPage = this.getMaxItemsPerPage();
    const startIndex = (this.currentPage - 1) * maxItemsPerPage;
    const endIndex = startIndex + maxItemsPerPage;

    this.dataToShow = EspervidaJson.slice(startIndex, endIndex)
      .map(d => ({
        EspervidaJson: d.Pais,
        Stars: d.Espervida
      }));
  }

  private getMaxItemsPerPage(): number {
    if (this.width < 400) {
      return 16;
    } else if (this.width < 600) {
      return 32;
    } else if (this.width < 1200) {
      return 52;
    } else {
      return this.itemsPerPage;
    }
  }

  private adjustCurrentPage(): void {
    const maxItemsPerPage = this.getMaxItemsPerPage();
    const maxPages = Math.ceil(EspervidaJson.length / maxItemsPerPage);
    if (this.currentPage > maxPages) {
      this.currentPage = maxPages;
    }
  }

  private drawBars(): void {
    this.svg.selectAll('*').remove();

    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(this.dataToShow.map(d => d.EspervidaJson))
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

    const bars = this.svg.selectAll("rect")
      .data(this.dataToShow)
      .enter()
      .append("rect")
      .attr("x", d => x(d.EspervidaJson))
      .attr("y", d => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", d => this.height - y(d.Stars))
      .attr("fill", (d, i) => this.colors(i))
      .style("cursor", "pointer");

    this.addTooltipEvents(bars);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDataToShow();
      this.drawBars();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDataToShow();
      this.drawBars();
    }
  }

  private updateChart(): void {
    this.updateDataToShow();
    this.createSvg();
    this.drawBars();
  }
}
