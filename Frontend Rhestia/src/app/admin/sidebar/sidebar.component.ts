import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

  @Input() isExpanded = true;
  @Output() sidebarToggled = new EventEmitter<boolean>();

  public handleSidebarToggle = (): void => {
    this.sidebarToggled.emit(!this.isExpanded);
  }
}
