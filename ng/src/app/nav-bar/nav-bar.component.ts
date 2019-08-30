import { Component, OnInit } from '@angular/core';
import * as  $  from 'jquery';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var dropDownButton = $("button.dDMIcon");
    var dropDownButtonFlag = 0;

    $(window).resize(() => {
        if ($(window).width() <= 732) {
            dropDownButtonFlag = 0;
            $("div.otherContents").css("display", "none");
            $("button.dDMIcon").css("border", "0").css("background-color", "rgba(0, 0, 0)");
        }
        else if ($(window).width() > 732) {
            dropDownButtonFlag = 1;
            $("div.otherContents").css("display", "grid");
        }
    });

    dropDownButton.click(() => {
        var width = $(window).width();
        if (width <= 732) {
            if (dropDownButtonFlag == 0) {
                dropDownButtonFlag = 1;
                $("div.otherContents").css("display", "grid");
                $("button.dDMIcon").css("border", "0.1px #ffffff solid").css("background-color", "rgba(127, 127, 127)");
            }
            else {
                dropDownButtonFlag = 0;
                $("div.otherContents").css("display", "none");
                $("button.dDMIcon").css("border", "0").css("background-color", "rgba(0, 0, 0)");
            }
        }
    });
  }

}
