import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';

// Importamos el MÓDULO y los OBJETOS de los íconos
import { LucideAngularModule, GithubIcon, ExternalLinkIcon } from 'lucide-angular';
// Importa lo mismo que en Hero.ts para las animaciones
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


import { ScrollFadeInDirective } from '../../directives/scroll-fade-in';
import { TranslatePipe } from '../../pipes/translate-pipe';

// ¡NUEVO! Objeto para almacenar las URLs de los iconos de tecnología
const TECH_ICONS = {
  ANGULAR: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  SOLIDITY: 'https://www.svgrepo.com/show/374088/solidity.svg',
  METAMASK: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png',
  SWIFT: 'https://cdn-icons-png.flaticon.com/512/5968/5968371.png',
  IOS: 'https://www.freeiconspng.com/uploads/ios-png-6.png',
  FIRESTORE: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png',
  CORE_LOCATION: 'https://www.kodeco.com/assets/murakami/category-icons/category-maps-location-ios-17163152e4da880c4a629fc536b6e460002d130ed409168a16b7bdbe483322bb.svg',
  MAPKIT: 'https://developer.apple.com/assets/elements/icons/maps/maps-128x128_2x.png',
  KOTLIN: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png',
  ANDROID_STUDIO: 'https://developer.android.com/static/images/brand/Android_Studio_Icon_2019.svg',
  ESP32: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Espressif_ESP32_icon.svg/1200px-Espressif_ESP32_icon.svg.png',
  INFLUXDB: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/InfluxDB_Logo.svg/1200px-InfluxDB_Logo.svg.png',
  GRAFANA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Grafana_logo.svg/1200px-Grafana_logo.svg.png',
  TMDB_API: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc753b7ea7bbdd77d54baf952670bb14e8f19bebbecfd44c20fe4f7f6f87bd.svg',
  RSA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/RSA_logo.svg/1200px-RSA_logo.svg.png',
  PYTHON: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
  SCIKIT_LEARN: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-light.svg',
  ANDROID: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1200px-Android_robot.svg.png',
  DART: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dart_logo.svg/1200px-Dart_logo.svg.png',
  FLUTTER: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Flutter_logo.svg/200px-Flutter_logo.svg.png',
  AI_CHATBOT: 'https://miro.medium.com/v2/resize:fit:512/1*CVN6qAJuZsSKh6w2c0TQZg.png',
  JAVASCRIPT: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  SQL: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
  CSHARP: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/C_Sharp_logo_and_wordmark.svg/1200px-C_Sharp_logo_and_wordmark.svg.png',
  UNITY: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1200px-Unity_Technologies_logo.svg.png',
  VHDL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/VHDL_Logo.svg/1200px-VHDL_Logo.svg.png',
  FPGA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Altera_logo.svg/1200px-Altera_logo.svg.png'}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule, ScrollFadeInDirective, TranslatePipe], // El módulo se encarga de los íconos
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
    trigger('fadeAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => visible', [
        animate('800ms ease-out')
      ]),
      transition('visible => void', [
        animate('400ms ease-in')
      ])
    ])
  ]
})


export class Projects {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;
  sectionVisible = signal(false); // Necesitas esta signal

  onSectionVisible(isVisible: boolean) {
    this.sectionVisible.set(isVisible);
  }
  // Exponemos los objetos de los íconos para el HTML
  readonly GithubIcon = GithubIcon;
  readonly ExternalLinkIcon = ExternalLinkIcon;

  // Nuevos datos de los proyectos
public projects = [
    {
      id: 1,
      titleKey: 'projects.pacto.title',
      descriptionKeys: [
        'projects.pacto.description',
      ],
      image: '/pacto.png',
      techStack: [
        { name: 'Angular', icon: TECH_ICONS.ANGULAR },
        { name: 'Solidity', icon: TECH_ICONS.SOLIDITY },
        { name: 'MetaMask', icon: TECH_ICONS.METAMASK }
     ],
      codeLink: 'https://github.com/rubensuarez22/Pacto',
      demoLink: 'https://rubensuarez22.github.io/Pacto/'
    },
    {
      id: 2, // Asegúrate de que este ID sea único y no se repita
      titleKey: 'projects.stemify.title', // Nueva clave de traducción para el título
      descriptionKeys: ['projects.stemify.description'], // Nueva clave de traducción para la descripción
      image: '/stemifymain.png', // Ruta de la imagen principal de STEMify
      techStack: [
        { name: 'Swift', icon: TECH_ICONS.SWIFT },
        { name: 'iOS', icon: TECH_ICONS.IOS },
        { name: 'Firestore', icon: TECH_ICONS.FIRESTORE },
        { name: 'MapKit', icon: TECH_ICONS.MAPKIT }
      ],
      codeLink: 'https://github.com/rubensuarez22/Stemify', // Ajusta la URL del repo de STEMify
      demoLink: '#' // Si tienes un demo interactivo (ej. Figma Prototype), pon la URL aquí
    },
    {
      id: 3,
      titleKey: 'projects.inclusive_reservation.title',
      descriptionKeys: ['projects.inclusive_reservation.description'],
      image: '/deviceframes-5.png',
      techStack: [
        { name: 'Angular', icon: TECH_ICONS.ANGULAR },
        { name: 'Firebase', icon: TECH_ICONS.FIRESTORE } // Usamos el mismo icono de Firestore para Firebase
      ],
      codeLink: 'https://github.com/rubensuarez22/JossBarbershop',
      demoLink: 'https://rubensuarez22.github.io/JossBarbershop/'
    },
    {
      id: 4,
      titleKey: 'projects.cultivo_sano.title', // <-- ¡CAMBIO AQUÍ! Nueva clave para título
      descriptionKeys: [ // <-- ¡CAMBIO AQUÍ! Ahora es un array de descripciones
        'projects.cultivo_sano.description',
      ],
      image: '/deviceframes-2.png', // <-- URL de imagen para Cultivo Sano
      techStack: [
        { name: 'Swift', icon: TECH_ICONS.SWIFT },
        { name: 'iOS', icon: TECH_ICONS.IOS },
        { name: 'Core ML / Vision API', icon: TECH_ICONS.AI_CHATBOT } // Usamos AI_CHATBOT como genérico para ML
      ],
      codeLink: 'https://github.com/rubensuarez22/Cultivo-Sano', // Ajusta si es diferente
      demoLink: '#' // O un enlace real si existe
    },
   /* {r
      id: 5,
      titleKey: 'projects.iot_monitoring.title',
      descriptionKey: 'projects.iot_monitoring.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/lJ4W8Y2tX2k3k4k5l6l7m8/iot.png',
      techStack: [
        { name: 'ESP32', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Espressif_ESP32_icon.svg/1200px-Espressif_ESP32_icon.svg.png' },
        { name: 'InfluxDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/InfluxDB_Logo.svg/1200px-InfluxDB_Logo.svg.png' },
        { name: 'Grafana', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Grafana_logo.svg/1200px-Grafana_logo.svg.png' }
      ],
      codeLink: 'https://github.com/rubensuarez22/IoT-Temperature-Monitoring',
      demoLink: '#'
    },
    {
      id: 5,
      titleKey: 'projects.cine_series_hub.title',
      descriptionKey: 'projects.cine_series_hub.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/2s3d4f5g6h7j8k9l0m1n/movies.png',
      techStack: [
        { name: 'Kotlin', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png' },
        { name: 'TMDb API', icon: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc753b7ea7bbdd77d54baf952670bb14e8f19bebbecfd44c20fe4f7f6f87bd.svg' }
      ],
      codeLink: 'https://github.com/rubensuarez22/Cine-Series-Hub',
      demoLink: '#'
    },
    {
      id: 7,
      titleKey: 'projects.sms_encryption.title',
      descriptionKey: 'projects.sms_encryption.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/qwertyyuiopasdfghjklzxcvbnm/encryption.png',
      techStack: [
        { name: 'Kotlin', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png' },
        { name: 'RSA', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/RSA_logo.svg/1200px-RSA_logo.svg.png' }
      ],
      codeLink: 'https://github.com/rubensuarez22/SMS-Encryption',
      demoLink: '#'
    },
    {
      id: 8,
      titleKey: 'projects.ml_travel_prediction.title',
      descriptionKey: 'projects.ml_travel_prediction.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/zxcvbnmasdfghjklqwertyuiop/travel.png',
      techStack: [
        { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
        { name: 'Scikit-learn', icon: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-light.svg' }
      ],
      codeLink: 'https://github.com/rubensuarez22/ML-Travel-Prediction',
      demoLink: '#'
    },
    {
      id: 9,
      titleKey: 'projects.parking_system.title',
      descriptionKey: 'projects.parking_system.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/poiuytrewqasdfghjklmnbvcxz/parking.png',
      techStack: [
        { name: 'Kotlin', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png' },
        { name: 'Android', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1200px-Android_robot.svg.png' }
      ],
      codeLink: 'https://github.com/rubensuarez22/Parking-Management-System',
      demoLink: '#'
    },
    {
      id: 10,
      titleKey: 'projects.cancer_support_app.title',
      descriptionKey: 'projects.cancer_support_app.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/lkjhgfdsaqwertymnbvcx/cancer.png',
      techStack: [
        { name: 'Dart', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dart_logo.svg/1200px-Dart_logo.svg.png' },
        { name: 'Flutter', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Flutter_logo.svg/200px-Flutter_logo.svg.png' },
        { name: 'AI Chatbot', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Chatbot_logo.svg/1200px-Chatbot_logo.svg.png' }
      ],
      codeLink: 'https://github.com/rubensuarez22/Cancer-Support-App',
      demoLink: '#'
    },
    {
      id: 11,
      titleKey: 'projects.sql_transaction_system.title',
      descriptionKey: 'projects.sql_transaction_system.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/abcdefghijklmnoprstuvwxyz/sql.png',
      techStack: [
        { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
        { name: 'SQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' }
      ],
      codeLink: 'https://github.com/rubensuarez22/SQL-Transaction-Management-System',
      demoLink: '#'
    },
    {
      id: 12,
      titleKey: 'projects.super_mario_bros.title',
      descriptionKey: 'projects.super_mario_bros.description',
      image: 'https://uploadthingy.s3.us-west-1.amazonaws.com/0987654321qwertyuiopasdfghjkl/mario.png',
      techStack: [
        { name: 'C#', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/C_Sharp_logo_and_wordmark.svg/1200px-C_Sharp_logo_and_wordmark.svg.png' },
        { name: 'Unity', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1200px-Unity_Technologies_logo.svg.png' }
      ],
      codeLink: 'https://github.com/rubensuarez22/Super-Mario-Bros',
      demoLink: '#'
    },
        {
      id: 13,
      titleKey: 'projects.mobile_academic.title',
      descriptionKeys: [ // <-- ¡CAMBIO AQUÍ! Ahora es un array de descripciones
        'projects.cultivo_sano.description_1',
        'projects.cultivo_sano.description_2'
      ],
      image: '/deviceframes.png',
      techStack: [+
        { name: 'Kotlin', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png' },
        { name: 'Android Studio', icon: 'https://developer.android.com/static/images/brand/Android_Studio_Icon_2019.svg' }
      ],
      codeLink: 'https://github.com/rubensuarez22/Mobile-Academic-Management',
      demoLink: '#'
    },*/

  ];
}