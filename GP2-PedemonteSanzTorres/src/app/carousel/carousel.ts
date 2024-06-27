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
            image: '../../assets/imagenes-carousel/pobresa1.PNG',
            thumbImage: '../../assets/imagenes-carousel/pobresa1.PNG',
            alt: 'Índice de población mundial %',
            title: 'Índice de población mundial %'
        },
        {
            image: '../../assets/imagenes-carousel/pobresa2.PNG',
            thumbImage: '../../assets/imagenes-carousel/pobresa2.PNG',
            alt: 'Países del mundo con más población y más área',
            title: 'Países del mundo con más población y más área'
        },
        {
            image: '../../assets/imagenes-carousel/espervida1.PNG',
            thumbImage: '../../assets/imagenes-carousel/espervida1.PNG',
            alt: 'Esperanza de vida',
            title: 'Esperanza de vida'
        },
        {
            image: '../../assets/imagenes-carousel/espervida2.PNG',
            thumbImage: '../../assets/imagenes-carousel/espervida2.PNG',
            alt: 'Países con menos y más muertes en adultos',
            title: 'Países con menos y más muertes en adultos'
        },
        {
            image: '../../assets/imagenes-carousel/fertilitat1.PNG',
            thumbImage: '../../assets/imagenes-carousel/fertilitat1.PNG',
            alt: 'Promedio de hijos por mujer en 2020',
            title: 'Promedio de hijos por mujer en 2020'
        }
    ];
}