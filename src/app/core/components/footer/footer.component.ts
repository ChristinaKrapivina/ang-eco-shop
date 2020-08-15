import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactInfo: contactInfo = {
    email: 'info@blueberry.shop',
    phone: '4152654398',
    address: '333 1st St, San Francisco, CA 94208 usa',
    crYear: new Date().getFullYear(),
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface contactInfo {
  email: string;
  phone: string;
  address: string;
  crYear: Date | number;
}
