import { Component } from '@angular/core'

const MENU_PARAMS = {
  expanded: {
    icon: 'close',
    width: 260
  },
  compressed: {
    icon: 'menu',
    width: 54
  }
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  expanded: boolean = true
  menu = MENU_PARAMS.expanded

  constructor() {}

  ngOnInit() {}

  expandeMenu() {
    this.menu = MENU_PARAMS.expanded
    this.expanded = true
  }

  compressMenu() {
    this.menu = MENU_PARAMS.compressed
    this.expanded = false
  }

  resizeSideBar() {
    if (this.expanded) this.compressMenu()
    else this.expandeMenu()
  }
}
