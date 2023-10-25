import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements  OnInit{

  count = 0;
  targetValue = 400;
  duration = 5000;

  ngOnInit(): void {
    const interval = 200;
    const steps = this.targetValue / (this.duration / interval);

    const updateCount = () => {
      if (this.count < this.targetValue) {
        this.count += steps;
      } else {
        this.count = this.targetValue;
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updateCount, interval);
  }

  slidesStore: any[] = [
    {
      imageLink: 'https://preview.colorlib.com/theme/avo/images/bg_1.jpg.webp',
      titleText: 'we create modern & minimal website',
      subTitleText: 'a small river named duden flows by their place and supplies it with the necessary regelialia.',
      buttonText: 'explore projects',
      countProject: 21,
      bottomText: 'years of experienced'
    },
    {
      imageLink: 'https://preview.colorlib.com/theme/avo/images/bg_2.jpg.webp',
      titleText: 'we create modern & minimal website',
      subTitleText: 'a small river named duden flows by their place and supplies it with the necessary regelialia.',
      buttonText: 'start project',
      countProject: 400,
      bottomText: 'more than a hundred successful projects'
    }
  ];


  blogsDate:any = 'June 10, 2020';



  customOptions: OwlOptions = {
    loop: true, // Enable looping
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };



  aboutSectionItems: any[] = [
    {icon: 'assets/images/about-images/graphic-design.png', alt: '', serviceName: 'ui/ux design'},
    {icon: 'assets/images/about-images/web-programming.png', alt: '', serviceName: 'web development'},
    {icon: 'assets/images/about-images/layers.png', alt: '', serviceName: 'product design'},
    {icon: 'assets/images/about-images/coding.png', alt: '', serviceName: 'mobile apps'},
    {icon: 'assets/images/about-images/zoom.png', alt: '', serviceName: 'seo'},
  ];


  testimonialOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  testimonials: any[] = [
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
    {
      description: 'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.',
      image: 'https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp',
      name: 'roger scott',
      position: 'marketing manager'
    },
  ];


  blogs: any[] = [
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_1.jpg.webp',date:this.blogsDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'},
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_2.jpg.webp',date:this.blogsDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'},
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_3.jpg.webp',date:this.blogsDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'},
    {header:'amplify your blockchain team',imageLink:'https://preview.colorlib.com/theme/avo/images/image_4.jpg.webp',date:this.blogsDate,user:'admin',comments:'3',subText:'far far away behind the world mountains, far from the countries Vokalia and Constantia, there live the blind texts.'}
  ]

}