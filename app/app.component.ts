import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {Hero} from './heroes/hero';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroService} from './heroes/hero.service';

//CDN Service
import {CDNFile} from './CDN/cdn-file';
import {CDNFileDetailComponent} from './CDN/cdn-file-detail.component';
import {CDNService} from './CDN/cdn.service';

@Component({
    selector: 'CDNOnPrem',
    template: `
    <h1>Files</h1>
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    
    <ul class="filelist">
    <li *ngFor="let cdnfile of cdnFiles">
        {{cdnfile.id}} - {{cdnfile.modified}} - {{cdnfile.createdDate}} - {{cdnfile.name}}
</li>
</ul>
    
    
    
    
    
    
    
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero">hero deets</my-hero-detail>
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    providers: [HeroService, CDNService]
})
export class AppComponent implements OnInit {
    constructor(private heroService: HeroService, private cdnService: CDNService) {
    }

    ngOnInit(): void {
        this.getHeroes();
        this.getCDNFiles();
    }


    getCDNFiles(): void {
        this.cdnService.getCDNFiles().then(cdnfiles => this.cdnFiles = cdnfiles);
    }

    getHeroes(): void {
        //async call:
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        //sync call:
        var abcd = this.heroService.getStr();
        console.log(abcd);
        //slow async:
        this.heroService.getHeroesSlowly().then(heroes => this.slowHeroes = heroes);
    }

    title = 'Tour of Heroes';

    cdnFiles: CDNFile[];

    heroes: Hero[];
    slowHeroes: Hero[];
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}