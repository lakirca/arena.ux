import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() theme = 'dawn';
  @Input() env;

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    if (this.theme === 'dawn') {
      this.themeService.setDawnTheme();
    } else {
      this.themeService.setDuskTheme();
    }
    this.themeService.setEnvironment(this.env);
  }

}
