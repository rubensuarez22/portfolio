import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';
import { TranslatePipe } from '../../pipes/translate-pipe';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ScrollFadeInDirective } from '../../directives/scroll-fade-in';
// Importamos los íconos para el modal (cerrar, siguiente, anterior)
import { LucideAngularModule, XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-angular'; // <-- ¡Añade ChevronLeftIcon, ChevronRightIcon aquí!

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    ScrollFadeInDirective,
    TranslatePipe,
    LucideAngularModule // Asegúrate de que este módulo esté importado para los íconos
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => visible', [animate('800ms ease-out')]),
      transition('visible => void', [animate('400ms ease-in')])
    ]),
    trigger('modalAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.9)' })),
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [animate('200ms ease-out')]),
      transition('* => void', [animate('200ms ease-in')])
    ])
  ]
})
export class Experience {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  activeTab = signal<'relevant' | 'education'>('relevant');
  sectionVisible = signal(false);

  // Signals para controlar el modal de imagen (ahora con array de URLs y índice)
  selectedModalImages = signal<string[]>([]); // Array de URLs de imágenes
  currentImageIndex = signal(0); // Índice de la imagen actual
  isModalOpen = signal(false);

  // Exponemos los íconos para el HTML
  readonly XIcon = XIcon;
  readonly ChevronLeftIcon = ChevronLeftIcon; // <-- ¡Nuevo!
  readonly ChevronRightIcon = ChevronRightIcon; // <-- ¡Nuevo!

  onSectionVisible(isVisible: boolean) {
    this.sectionVisible.set(isVisible);
  }

  // Método para abrir el modal (ahora acepta un array de URLs)
  openImageModal(imageUrls: string[] | undefined): void {
    if (imageUrls && imageUrls.length > 0) {
      this.selectedModalImages.set(imageUrls);
      this.currentImageIndex.set(0); // Siempre empieza en la primera imagen
      this.isModalOpen.set(true);
    }
  }

  closeImageModal(): void {
    this.isModalOpen.set(false);
    this.selectedModalImages.set([]); // Limpia el array al cerrar
    this.currentImageIndex.set(0); // Resetea el índice
  }

  // Métodos para navegar por el carrusel
  nextImage(): void {
    this.currentImageIndex.update(index =>
      (index + 1) % this.selectedModalImages().length
    );
  }

  prevImage(): void {
    this.currentImageIndex.update(index =>
      (index - 1 + this.selectedModalImages().length) % this.selectedModalImages().length
    );
  }

  relevantExperience = [
    {
      id: 1,
      periodKey: 'experience.halliburton.period',
      companyKey: 'experience.halliburton.company',
      roleKey: 'experience.halliburton.role',
      descriptionKeys: [
        'experience.halliburton.desc1',
        'experience.halliburton.desc2',
        'experience.halliburton.desc3'
      ],
      logo: 'https://shallowanddeepwaterexpo.com/wp-content/uploads/2022/09/kisspng-halliburton-logo-baker-hughes-a-ge-company-oil-fi-halliburton-logo-5a73fd754bc0e4.4639338415175509653103.jpg',
      // ¡CAMBIO AQUÍ! Ahora es un array de imágenes
      images: [
        '/hal2.jpeg',
        '/angular.jpg',
        '/hal.jpeg',



      ]
    },
    {
      id: 4, // Asegúrate de que el ID sea único
      periodKey: 'experience.lifi_hackathon.period',
      companyKey: 'experience.lifi_hackathon.company',
      roleKey: 'experience.lifi_hackathon.role',
      descriptionKeys: [
        'experience.lifi_hackathon.desc1',
        'experience.lifi_hackathon.desc2'
      ],
      logo: 'https://www.udlap.mx/stem/assets/images/social/stemUDLAP-Facebook.jpg',
      images: [
        '/lifi3.jpeg',
        '/lifi2.jpeg', // Placeholder: Imagen de la app Lifi
        '/lifi.jpeg'  // Placeholder: Otra imagen de la app Lifi

      ]
    },
    {
      id: 2,
      periodKey: 'experience.enactus_hackathon.period',
      companyKey: 'experience.enactus_hackathon.company',
      roleKey: 'experience.enactus_hackathon.role',
      descriptionKeys: [
        'experience.enactus_hackathon.desc1',
        'experience.enactus_hackathon.desc2'
      ],
      logo: 'https://images.seeklogo.com/logo-png/20/1/enactus-logo-png_seeklogo-206710.png',
      // ¡CAMBIO AQUÍ! Ahora es un array de imágenes
      images: [
        '/enactusgdl3.jpeg',
        '/enactusgdl2.jpeg',
        '/enactusgdl.jpeg',
      ]
    },
    {
      id: 3,
      periodKey: 'experience.enactus_challenge.period',
      companyKey: 'experience.enactus_challenge.company',
      roleKey: 'experience.enactus_challenge.role',
      descriptionKeys: [
        'experience.enactus_challenge.desc1',
        'experience.enactus_challenge.desc2'
      ],
      logo: 'https://www.enactusaustralia.org.au/wp-content/uploads/2023/08/SDG-Enactus-687x686-dcbade2.png',
      // ¡CAMBIO AQUÍ! Ahora es un array de imágenes
      images: [
        '/enactuscdmx3.jpeg',
        '/enactuscdmx.jpeg',
        '/enactuscdmx2.jpeg',
        '/enactuscdmx4.jpeg',


      ]
    },
  ];

  education = [
    {
      id: 1,
      periodKey: 'education.udlap.period',
      institutionKey: 'education.udlap.institution',
      degreeKey: 'education.udlap.degree',
      descriptionKey: 'education.udlap.relevant_courses',
      logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052013/universidad_de_las_americas_puebla.png?itok=fCDHEd8v',
      // ¡CAMBIO AQUÍ! Ahora es un array de imágenes
      images: [
        'https://placehold.co/600x400/3b82f6/FFFFFF?text=UDLAP+Campus+1',
        'https://placehold.co/600x400/1e40af/FFFFFF?text=UDLAP+Campus+2'
      ]
    },
    {
      id: 2, // Asegúrate de que el ID sea único
      periodKey: 'education.cervantes.period',
      institutionKey: 'education.cervantes.institution',
      degreeKey: 'education.cervantes.degree',
      descriptionKey: 'education.cervantes.description',
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHlBeZ_fzj1TQ/company-logo_200_200/company-logo_200_200/0/1674677971351/colegio_cervantes_ecuador_logo?e=2147483647&v=beta&t=xmcXED6ghyjmdkWZ-t98pZaFq1Kgsq2aCUgWC-qHX_Y', // Placeholder: Logo del Colegio Cervantes
      images: [
        'https://placehold.co/600x400/3b82f6/FFFFFF?text=Cervantes+1', // Placeholder: Imagen del colegio
        'https://placehold.co/600x400/1e40af/FFFFFF?text=Cervantes+2'  // Placeholder: Otra imagen
      ]
    }
  ];
}