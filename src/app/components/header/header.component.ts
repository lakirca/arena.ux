import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UsermenuComponent } from '../usermenu/usermenu.component';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() links = [{ title: 'Link1', url: '/alerts' }, { title: 'Link2', url: '/' }, { title: 'Link3', url: '/' }];
  @Input() user: any;

  musicLinks = [
    { title: 'Arena Music', url: 'https://soundblock.arena.com'}, { title: 'Soundblock', url: 'https://music.arena.com' }
  ];

  merchLinks = [
    { title: 'Apparel',         url: 'https://apparel.arena.com'},          { title: 'Embroidery',     url: 'https://embroidery.arena.com'},
    { title: 'Face Coverings',  url: 'https://facecoverings.arena.com'},    { title: 'Merchandising',  url: 'https://merchandising.arena.com'},
    { title: 'Prints',          url: 'https://prints.arena.com'},           { title: 'Screen Burning', url: 'https://screenburning.arena.com'},
    { title: 'Sewing',          url: 'https://sewing.arena.com'},
  ];

  constructor(
    private popoverController: PopoverController,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    this.getEnvironment();
  }

  getEnvironment() {
    this.themeService.getEnvironment().subscribe(env => {
      this.updateGlobalLinks(env.appEnvironment);
      console.log(this.musicLinks);
      console.log(this.merchLinks);
    });
  }

  updateGlobalLinks(appEnv) {
    if (appEnv == 'production') { return ; }
    for (const link of this.musicLinks) {
      const newUrl = link.url.slice(0, 8) + appEnv + '.' + link.url.slice(8);
      link.url = newUrl;
    }
    for (const link of this.merchLinks) {
      const newUrl = link.url.slice(0, 8) + appEnv + '.' + link.url.slice(8);
      link.url = newUrl;
    }
  }

  async showUserPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UsermenuComponent,
      event: ev,
      translucent: true,
      showBackdrop: false,
    });
    popover.style.cssText = '--width: 200px; --background: transparent;';
    console.log(popover);
    return await popover.present();
  }

}
