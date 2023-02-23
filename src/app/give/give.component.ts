import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
      this.totalgiftlira = this.watercount * 50 + this.bootcount * 425 + this.coatcount * 550 + this.drinkcount * 125 + this.tentcount * 1125 + this.toycount * 450 + this.bookcount * 250 + this.firstaidcount * 850;
  }

  ngDoCheck(): void {
      this.totalgiftlira = this.watercount * 50 + this.bootcount * 425 + this.coatcount * 550 + this.drinkcount * 125 + this.tentcount * 1125 + this.toycount * 450 + this.bookcount * 250 + this.firstaidcount * 850;
  }

  onLoadPaymentData($event) {
  }

  convertToUSD() {
      this.totalgiftusd = this.totalgiftlira * 0.053;
  }

  totalgiftlira = 0;
  totalgiftusd = 0;
  tendollars = true;

  //Item costs in Liras
  water = 50;
  protien_drink = 125;
  tents = 1125;
  coats = 550;
  boots = 425;
  toys = 450;
  books = 250;
  firstaid = 850;

  //Item counts
  watercount = 0;
  bootcount = 0;
  coatcount = 0;
  drinkcount = 0;
  tentcount = 0;
  toycount = 0;
  bookcount = 0;
  firstaidcount = 0;
}

