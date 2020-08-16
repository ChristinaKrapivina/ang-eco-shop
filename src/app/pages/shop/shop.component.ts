import { Component, OnInit, OnDestroy } from '@angular/core';
import { SectionIntroService } from 'src/app/shared/services/sectionIntro.service';
import { Section } from 'src/app/shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
  isLoading = false;
  subscription: Subscription;
  section: Section = {
    title: 'Shop Online',
    text: 'Lorem ipsum dolor sit amet'
  };

  constructor( private introService: SectionIntroService ) {}

  ngOnInit(): void {
    this.subscription = this.introService.section$
      .subscribe(res => {
        if(res) { this.section = res };
      })
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
