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
            alt: 'Grafic Index Població Mundial',
            title: 'Grafic Index Població Mundial (%)'
        },
        {
            image: '../../assets/imagenes-carousel/pobresa2.PNG',
            thumbImage: '../../assets/imagenes-carousel/pobresa2.PNG',
            alt: 'Gràfic dels paisos amb més població del món i més area per km2',
            title: 'Gràfic dels paisos amb més població i més area per km2'
        },
        {
            image: '../../assets/imagenes-carousel/espervida1.PNG',
            thumbImage: '../../assets/imagenes-carousel/espervida1.PNG',
            alt: 'Esperança de vida',
            title: 'Esperança de vida (anys)'
        },
        {
            image: '../../assets/imagenes-carousel/espervida2.PNG',
            thumbImage: '../../assets/imagenes-carousel/espervida2.PNG',
            alt: 'Gràfic dels paisos amb menys i més morts',
            title: 'Gràfic dels paisos amb menys i més morts'
        },
        {
            image: '../../assets/imagenes-carousel/fertilitat1.PNG',
            thumbImage: '../../assets/imagenes-carousel/fertilitat1.PNG',
            alt: 'Fertilitat de alguns paisos al any 2020',
            title: 'Fertilitat de alguns paisos al any 2020'
        }
    ];
}