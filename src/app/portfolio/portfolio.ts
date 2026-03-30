import { Component, Inject, OnInit, PLATFORM_ID, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements OnInit, OnDestroy {
  roles: string[] = ['JUNIOR WEB DEVELOPER', 'IT SUPPORT', 'UI/UX DESIGNER'];
  displayText: string = '';
  isDeleting: boolean = false;
  wordIndex: number = 0;
  typingSpeed: number = 150;
  private timeoutId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Small delay before starting to ensure everything is initialized
      this.timeoutId = setTimeout(() => this.type(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  type() {
    if (!isPlatformBrowser(this.platformId)) return;

    const currentWord = this.roles[this.wordIndex];
    if (!currentWord) return;

    if (this.isDeleting) {
      this.displayText = currentWord.substring(0, this.displayText.length - 1);
      this.typingSpeed = 50;
    } else {
      this.displayText = currentWord.substring(0, this.displayText.length + 1);
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.displayText === currentWord) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // Wait 2s after full word
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.roles.length;
      this.typingSpeed = 500; // Wait 0.5s before next word
    }

    // Clear any existing timeout to prevent multiple loops
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    
    this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
    this.cdRef.markForCheck(); // Use markForCheck instead of detectChanges for better performance
  }

  projects = [
    {
      title: 'E-Attendance',
      category: 'WEB APPLICATION',
      year: '2026',
      description: 'The Attendance System is designed to modernize and simplify how schools manage student attendance.<br><br><b>Goals:</b><br>• Reduce human error<br>• Make attendance faster and easier<br>• Keep records organized<br>• Improve monitoring for teachers<br>• Save time for teachers<br>• Improve overall school discipline<br><br><b>Demo it with:</b><br>Username: Admin <br> <b>Password: 123456</b>',
      tags: ['Angular', 'NodeJs', 'SQL'],
      url: 'attendance-management.app',
      color: '#06b6d4',
      glowRgb: '6, 182, 212',
      size: 'large',
      link: '#',
      href: 'https://e-attendance-ynlw.vercel.app/login'
    },
    {
      title: 'Car Wash Management',
      category: 'WEB APPLICATION',
      year: '2026',
      description: '<b>Demo it with:</b><br>User: Admin <br> <b>Password: 1111</b>',
      tags: ['Angular', 'NodeJs', 'SQL'],
      url: 'car-garage-management.app',
      color: '#10b981',
      glowRgb: '16, 185, 129',
      size: 'small',
      link: '#',
      href: 'https://sshinz-car-wash.vercel.app/login'
    },
    {
      title: 'Men Clothing Ecommerce',
      category: 'WEB APPLICATION',
      year: '2024',
      tags: ['Html', 'Css', 'Bootstrap', 'Angular'],
      url: 'ecommerce.app',
      color: '#facc15',
      glowRgb: '250, 204, 21',
      size: 'small',
      link: '#',
      href: 'https://men-clothing-ecomerce.vercel.app/home'
    },
    {
      title: '2R3NY COSMETIC',
      category: 'WEB APPLICATION',
      year: '2026',
      description: 'Ecomerce Web And POS and Bakong Payment<b><br>Demo it with:</b><br>User: Admin1 <br><b>Password: @admin</b>',
      tags: ['Angular', 'NodeJs', 'MongoDB'],
      url: 'attendance-management-mvc.app',
      color: '#ec4899',
      glowRgb: '236, 72, 153',
      size: 'small',
      link: '#',
      href: 'https://frontend-cosmetic.vercel.app/store'
    },
    {
      title: 'Sshinz Game',
      category: 'WEB APPLICATION',
      year: '2025',
      tags: ['Angular', 'Bootstrap'],
      url: 'ecommerce-clothing.app',
      color: '#8b5cf6',
      glowRgb: '139, 92, 246',
      size: 'small',
      link: '#',
      href: 'https://sshinz-game.vercel.app/'
    },
    {
      title: 'Loan System',
      category: 'WEB APPLICATION',
      year: '2025',
      tags: ['Angular', 'Bootstrap'],
      url: 'loan-system.app',
      color: '#0ea5e9',
      glowRgb: '14, 165, 233',
      size: 'small',
      link: '#',
      href: 'https://loansystem-six.vercel.app/loginbank'
    },
    {
      title: 'Game Store Management System',
      category: 'WEB APPLICATION',
      year: '2025',
      tags: ['Angular', 'Bootstrap'],
      url: 'pos-window-form.app',
      color: '#ef4444',
      glowRgb: '239, 68, 68',
      size: 'small',
      link: '#',
      href: 'https://gamestore-phi.vercel.app/'
    },
    {
      title: 'Personal Portfolio',
      category: 'WEB APPLICATION',
      year: '2026',
      description: 'A Static Portfolio',
      tags: ['Html', 'Css', 'Javascript'],
      url: 'api-with-net.app',
      color: '#22c55e',
      glowRgb: '34, 197, 94',
      size: 'small',
      link: '#',
      href: 'https://personal-web-page-omega.vercel.app/'
    },
    {
      title: 'Other Project ...',
      category: 'WEB APPLICATION',
      year: '2025',
      tags: ['Angular', 'Bootstrap'],
      url: 'other-11-project.app',
      color: '#06b6d4',
      glowRgb: '6, 182, 212',
      size: 'small',
      link: '#',
      href: 'https://github.com/Phirunn891?tab=repositories'
    }
  ];

  experiences = [
    {
      date: '2024 — 2025',
      role: 'Freelance Graphic Design',
      description: 'Design posters, banners, artwork, and logos for local cake, bakery,and skincare shops',
      color: '#06b6d4',
      glowRgb: '6, 182, 212'
    },
    {
      date: '2024 — NOW',
      role: 'Setec Institute',
      company: 'Phnom Penh, Cambodia',
      type: 'University',
      description: "A Third-year student at SETEC Institute pursing a bacheler’s degree in the field of Management Information System(MIS)",
      tags: ['Web Development', 'Graphic Design', 'IT', 'Video Editing', 'Photo Grapher'],
      subjects: [
        {
          title: 'Graphic Design',
          years: 'Year 1-2',
          description: 'Designed many posters including Smart Poster, Khmer New Year, Water Festival, Leaflet, UI/UX Phone, Brochure, Banner, Name Card, Caltex Logo, Hotel Promotion Poster and more.',
          tags: ['Photoshop', 'Illustrator', 'Canva', 'Figma'],
          color: '#8b5cf6',
          expanded: true
        },
        {
          title: 'Web Development',
          years: 'Year 1-2',
          description: 'Learning the fundamentals of web design and development, focusing on frontend technologies and responsive design principles. (Further details to be added).',
          tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Angular'],
          color: '#06b6d4',
          expanded: false
        },
        {
          title: 'Console System',
          years: 'Year 1-2',
          description: 'Built a console application',
          tags: ['C++', 'C#'],
          color: '#facc15'
        },
        {
          title: 'API Development',
          years: 'Year 2',
          description: 'Built a API application',
          tags: ['NodeJs', 'Express', 'MongoDB', 'Rest API'],
          color: '#10b981'
        },
        {
          title: 'Database Design',
          years: 'Year 2',
          description: 'Built a Database Design',
          tags: ['MySQL', 'MongoDB', 'Schema Design'],
          color: '#ef4444'
        }
      ],
      color: '#8b5cf6',
      glowRgb: '139, 92, 246'
    },
    {
      date: '2017-2023',
      role: 'High School Student',
      company: 'Hun Sen Mondulkiri High School',
      description: 'Studied at Hun Sen Mondulkiri High School And Completed High School Diploma (Bac II) at Hun SenMondulkiri High School',
      color: '#10b981',
      glowRgb: '16, 185, 129'
    }
  ];

  onMouseEnter(event: MouseEvent) {
    // No longer strictly needed but kept for potential future use
  }

  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  }

  onMouseLeave(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  }

  toggleSubject(subject: any) {
    if (subject.description) {
      subject.expanded = !subject.expanded;
    }
  }
}
