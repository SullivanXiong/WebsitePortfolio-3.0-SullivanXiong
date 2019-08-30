import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.css']
})
export class CreatesessionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // submitSession() {
  //   this.http.post("/createSession").subscribe(data => {console.log(data)});
  // }

  // put on form in the html file
  // (ngSubmit)="submitSession()"
}
