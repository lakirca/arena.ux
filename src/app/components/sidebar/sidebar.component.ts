import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    public themeService: ThemeService,
  ) { }

  menuItems = [
    { title: 'Alerts', url: '/alerts' },  { title: 'Autosize', url: '/' },        { title: 'Avatars', url: '/' },
    { title: 'Badges', url: '/' },        { title: 'Breadcrumb', url: '/' },      { title: 'Buttons', url: '/' },
    { title: 'Button group', url: '/' },  { title: 'Cards', url: '/cards' },      { title: 'Charts', url: '/' },
    { title: 'Checklist', url: '/' },     { title: 'Dropdowns', url: '/' },       { title: 'Forms', url: '/' },
    { title: 'Icons', url: '/' },         { title: 'Kanban', url: '/' },          { title: 'Lists', url: '/' },
    { title: 'Map', url: '/' },           { title: 'Modal', url: '/' },           { title: 'Navs', url: '/' },
    { title: 'Navbar', url: '/' },        { title: 'Page headers', url: '/' },    { title: 'Pagination', url: '/' },
    { title: 'Popovers', url: '/' },      { title: 'Progress', url: '/' },        { title: 'Social post', url: '/' },
    { title: 'Spinners', url: '/' },      { title: 'Tables', url: '/' },          { title: 'Toasts', url: '/' },
    { title: 'Tooltips', url: '/' },      { title: 'Typography', url: '/' },      { title: 'Utilities', url: '/' },
  ];

  selectedMenuItem: any;

  ngOnInit() {
  }

  changeTheme() {
    if (this.themeService.isDuskTheme()) {
      this.themeService.setDawnTheme();
    } else {
      this.themeService.setDuskTheme();
    }
  }

  navigate(menuItem) {
    this.selectedMenuItem = menuItem;
    this.router.navigate([menuItem.url]);
  }
}
