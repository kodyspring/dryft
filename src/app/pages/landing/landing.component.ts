import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent {

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

}
