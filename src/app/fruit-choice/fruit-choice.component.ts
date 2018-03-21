import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-choice',
  templateUrl: './fruit-choice.component.html',
  styleUrls: ['./fruit-choice.component.css']
})
export class FruitChoiceComponent implements OnInit {
  private myFruit :string='苹果'
  private fruitName :string
  private photoAlt: Array<any>
  private myIf: Boolean
  constructor() {
    this.photoAlt = [
      {"id":"苹果","imgUrl":"./assets/img/apple.jpg"},
      {"id":"雪梨","imgUrl":"./assets/img/pear.jpg"},
      {"id":"香蕉","imgUrl":"./assets/img/bananer.jpg"},
      {"id":"百香果","imgUrl":"./assets/img/baixiangguo.jpg"},
      {"id":"火龙果","imgUrl":"./assets/img/huolongguo.jpg"},
    ]
  }

  ngOnInit() {
  }
  chooseItem(i){
    this.myIf = true;
  }
}
