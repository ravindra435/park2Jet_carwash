import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  isCollapsed = false;
  ngOnInit(): void {}

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
