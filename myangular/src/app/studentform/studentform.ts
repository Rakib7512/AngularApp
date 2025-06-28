import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-studentform',
  standalone: false,
  templateUrl: './studentform.html',
  styleUrl: './studentform.css'
})
export class Studentform {
  isDarkMode = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const mode = localStorage.getItem('theme');
    if (mode === 'dark') this.enableDarkMode();

    // Navbar scroll background change
    window.addEventListener('scroll', () => {
      document.querySelector('nav')?.classList.toggle(
        'scrolled', window.scrollY > 50
      );
    });
  }

  toggleDarkMode() { this.isDarkMode ? this.disableDarkMode() : this.enableDarkMode(); }
  enableDarkMode() { /* same as before */ }
  disableDarkMode() { /* same as before */ }
}
