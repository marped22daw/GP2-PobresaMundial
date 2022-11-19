import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: 'carousel.html',
    styleUrls: ['carousel.css']
})

export class CarouselComponent implements OnInit {
    
    constructor() { }
    ngOnInit(): void { }

    imgCollection: Array<object> = [
        {
            image: '../../assets/imagenes-carousel/image1.png',
            thumbImage: '../../assets/imagenes-carousel/image1.png',
            alt: 'Grafic1',
            title: 'Grafic1'
        },
        {
            image: '../../assets/imagenes-carousel/image1.png',
            thumbImage: '../../assets/imagenes-carousel/image1.png',
            alt: 'Grafic1',
            title: 'Grafic1'
        },
        {
            image: '../../assets/imagenes-carousel/image1.png',
            thumbImage: '../../assets/imagenes-carousel/image1.png',
            alt: 'Grafic1',
            title: 'Grafic1'
        },
        {
            image: '../../assets/imagenes-carousel/image1.png',
            thumbImage: '../../assets/imagenes-carousel/image1.png',
            alt: 'Grafic1',
            title: 'Grafic1'
        },
        {
            image: '../../assets/imagenes-carousel/image1.png',
            thumbImage: '../../assets/imagenes-carousel/image1.png',
            alt: 'Grafic1',
            title: 'Grafic1'
        }
    ];
}