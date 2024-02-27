import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent {

  @ViewChild('PDF', {static:false}) el!: ElementRef;

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
    this.router.navigateByUrl(`/${path}`);
  }

  makePdf() {
    let pdf = new jsPDF('p', 'cm', 'a4');

    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("sample.pdf");
      }
    })
  }

  public convertToPdf() {
    html2canvas(this.el.nativeElement).then(canvas => {
      const contentDataUrl = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataUrl, 'PNG', 0, 0, width, height);
      pdf.save('output.pdf');
    })
  }

}
