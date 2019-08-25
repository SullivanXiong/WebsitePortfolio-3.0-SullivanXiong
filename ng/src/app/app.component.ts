import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng';

  ngOnInit() {
    if (window.location.pathname == "/aboutMe") {
      document.getElementById('aboutMe').id = 'current';
    }
    else if (window.location.pathname == "/personalProjects") {
        document.getElementById("personalProjects").id = 'current';
    }
    else if (window.location.pathname == "/resume") {
        document.getElementById("resume").id = 'current';
    }
    else if (window.location.pathname == "/schoolEPortfolios") {
        document.getElementById("schoolE-Portfolios").id = 'current';
    }
    else if (window.location.pathname == "/coms101E-Portfolio") {
        document.getElementById("schoolE-Portfolios").id = 'current';
    }
    else if (window.location.pathname == "/eng134E-Portfolio") {
        document.getElementById("schoolE-Portfolios").id = 'current';
    }
    else if (window.location.pathname == "/robinhood/robinhood") {
        document.getElementById("robinhood").id = 'current';
    }
  }
}
