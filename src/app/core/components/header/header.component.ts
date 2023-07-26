import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  aboutPath: string = "about";
  contactPath: string = "contact";
  solutionsPath: string = "solutions"

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }

  navigate(path: string): void {
    this.router.navigateByUrl(`/${path}`)
  }

  navigateHome(): void {
    this.router.navigateByUrl("")
  }

}
