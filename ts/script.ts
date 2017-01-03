import 'zone.js';
import 'reflect-metadata';
import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
	selector: 'my-app',
	template: '<my-child param="Hellow Angular with TypeScript!"></my-child>'
})
class AppComponent { }

@Component({
	selector: 'my-child',
	template: '<p>{{param}}</p>',
})
class ChildComponent {
	@Input() param: string;
}

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, ChildComponent ],
	bootstrap: [ AppComponent ]
})
class Module {}

document.addEventListener('DOMContentLoaded', () => platformBrowserDynamic().bootstrapModule(Module));
