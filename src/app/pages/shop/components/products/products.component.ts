import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { SectionIntroService } from 'src/app/shared/services/sectionIntro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  activeSection: string;
  subscription: Subscription;
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private dbService: FirebaseService,
    private introService: SectionIntroService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.url
      .subscribe(url => this.activeSection = url[0].path);
    
    this.subscription.add(this.dbService.getSectionProducts(this.activeSection)
      .subscribe(products => this.products = products)
    );
    
    this.subscription.add(this.dbService.getSection(this.activeSection)
      .subscribe(section => { this.introService.changeSection(section) })
    );
  }

  ngOnDestroy():void {
    this.introService.changeSection({title: 'Shop Online', text: 'Lorem ipsum dolor sit amet'})
    this.subscription.unsubscribe();
  }

}
