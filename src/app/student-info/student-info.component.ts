import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  private userInfos: Array<any>
  constructor() {
    this.userInfos = [
      {"name":"Spring","gender":"12","nation":"汉族","place":"湖北"},
      {"name":"Summer","gender":"23","nation":"壮族","place":"广西"},
      {"name":"Autumn","gender":"42","nation":"汉族","place":"四川"},
      {"name":"Winter","gender":"32","nation":"土家族","place":"湖南"},
      {"name":"Yuki","gender":"24","nation":"汉族","place":"广东"},
    ];
  }
  ngOnInit() {
  }
  rowColor(){
    
  }
}
