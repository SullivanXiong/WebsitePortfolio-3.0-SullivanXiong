import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.css']
})
export class CreatesessionComponent implements OnInit {

  constructor(private http: HttpClient, Session: VideoSession) { }

  ngOnInit() {
  }

  submitSession() {
    this.http.post("/createSession", Session).subscribe(data => {console.log(data)});
  }

}
