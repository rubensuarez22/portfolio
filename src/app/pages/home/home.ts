import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { AboutMe } from '../../components/about-me/about-me';
import { Skills } from '../../components/skills/skills';
import { Experience } from '../../components/experience/experience';
import { Projects } from '../../components/projects/projects';
import { ContactButton } from '../../components/contact-button/contact-button';

@Component({
    selector: 'app-home',
    imports: [
        Hero,
        AboutMe,
        Skills,
        Experience,
        Projects,
        ContactButton
    ],
    templateUrl: './home.html',
    standalone: true
})
export class Home { }
