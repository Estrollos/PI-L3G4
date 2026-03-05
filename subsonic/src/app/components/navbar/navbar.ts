import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [NgOptimizedImage]
})
export class NavbarComponent {

  isOpen = false;
  isSubmenuOpen  = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  selectOption(option: string) {
    console.log(option);
    this.isOpen = false;
  }

  constructor(private router: Router) {}

  navToLogin(): void {
    this.router.navigate([RouterConstants.LOGIN]);
  }

  navToEvents(): void {
    this.router.navigate([RouterConstants.EVENTS]);
  }

  navToStore(): void {
    this.router.navigate([RouterConstants.STORE]);
  }

  navToFAQ(): void {
    this.router.navigate([RouterConstants.FAQ]);
  }

  navToHome(): void {
    this.router.navigate([RouterConstants.HOME]);
  }

  navToSetting(): void {
    this.router.navigate([RouterConstants.SETTINGS]);
  }

  navToServices(): void {
    this.router.navigate([RouterConstants.SETTINGS]);
  }

  navToMyCart(): void {
    this.router.navigate([RouterConstants.CART]);
  }

  navToMyTickets(): void {
    this.router.navigate([RouterConstants.MY_TICKETS]);
  }

  navToSpaces(): void {
    this.router.navigate([RouterConstants.SPACES]);
  }

  navToStallInfo(): void {
    this.router.navigate([RouterConstants.STALL_INFO]);
  }
}


