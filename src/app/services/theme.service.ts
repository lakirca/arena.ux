import { Injectable } from '@angular/core';
import { Theme, dusk, dawn } from '../theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  active: Theme = dusk;
  availableThemes: Theme[] = [dawn, dusk];

  environment: BehaviorSubject<any>;

  constructor() {
    this.environment = new BehaviorSubject({});
  }

  setEnvironment(env) {
    this.environment.next(env);
  }

  getEnvironment() {
    return this.environment.asObservable();
  }

  getAvailableTheme(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDuskTheme(): boolean {
    return this.active.name === dusk.name;
  }

  setDuskTheme(): void {
    this.setActiveTheme(dusk);
  }

  setDawnTheme(): void {
    this.setActiveTheme(dawn);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
