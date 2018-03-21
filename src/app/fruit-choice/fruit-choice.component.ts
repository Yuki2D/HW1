import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-choice',
  templateUrl: './fruit-choice.component.html',
  styleUrls: ['./fruit-choice.component.css']
})
export class FruitChoiceComponent implements OnInit {
  private fruitName :string
  private photoAlt: Array<any>
  private myIf: Boolean
  constructor() {
    this.photoAlt = [
      {"id":"苹果","imgUrl":"./assets/img/apple.jpg","show":false},
      {"id":"雪梨","imgUrl":"./assets/img/pear.jpg","show":false},
      {"id":"香蕉","imgUrl":"./assets/img/bananer.jpg","show":false},
      {"id":"百香果","imgUrl":"./assets/img/baixiangguo.jpg","show":false},
      {"id":"火龙果","imgUrl":"./assets/img/huolongguo.jpg","show":false},
    ]
  }

  ngOnInit() {
  }
  chooseItem(u,i){
    for(var k = 0;k < this.photoAlt.length;k++){
      if(i == k) {
        this.photoAlt[k].show = true;
      } else {
        this.photoAlt[k].show = false;
      }
    }
  }
  setStyle(){
    return{
      'position': 'absolute',
      'bottom': '50px'
    }
  }
}
