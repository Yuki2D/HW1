import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  private myHero: Array<any>
  private heroName: string
  private message: string
  private searchName: string
  constructor() {
    this.myHero = []
  }

  ngOnInit() {
  }
  addHero(){

    if(this.heroName != "" && this.heroName != undefined && this.judge(this.myHero,this.heroName)){
      this.myHero.push({"name": this.heroName, "disabled":"disabled","selected" : false})
      this.heroName = ""
    }else{
      alert('输入内容不正确')
    }

  }
  judge = function(arr,a){
      var flag = true
      for(var i = 0;i < arr.length;i++){
        if(a == arr[i].name) {
          flag = false
          if(!flag){
            return false
          }
        } 
      }
      return true
  }
  edit(item,index){
    for(var i=0; i<this.myHero.length; i++){
      if(index==i){
        this.myHero[i].disabled = ""
      }else{
        this.myHero[i].disabled = "disabled"
      }

    }
  }
  loseFocus(editValue,index){
    this.myHero[index] = {"name":editValue,"disabled":"disabled","selected":false}
  }
  delete(item,index){
    this.myHero.splice(index,1)
  }
  search(content){
    if(content == "" || content == undefined){
      content = this.searchName
    }
    for(var i= 0;i < this.myHero.length;i++){
      if(this.myHero[i].name == content) {
        this.myHero[i].selected = true;
        this.message = ""
      } else {
          this.myHero[i].selected = false;
          this.message = "未找到,请确认输入信息!"
      }
    }
  }
}
