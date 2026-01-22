import { Routes } from '@angular/router';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsOfService } from './pages/terms-of-service/terms-of-service';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: 'terms-of-service', component: TermsOfService }
];
