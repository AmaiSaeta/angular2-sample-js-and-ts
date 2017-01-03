require('reflect-metadata');
require('zone.js');
var ngCore = require('@angular/core');
var Component = ngCore.Component;
var Class = ngCore.Class;
var NgModule = ngCore.NgModule;
var BrowserModule = require('@angular/platform-browser').BrowserModule;
var platformBrowserDynamic = require('@angular/platform-browser-dynamic').platformBrowserDynamic;

var AppComponent = Component({
	selector: 'my-app',
	template: '<my-child param="Hello Angular with ES2015!"></my-child>'
})
.Class({
	constructor: function() {}
});

var ChildComponent = Component({
	selector: 'my-child',
	template: '<p>{{param}}</p>',
	inputs: [ 'param' ]
})
.Class({
	constructor: function() {}
});

var Module = NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, ChildComponent ],
	bootstrap: [ AppComponent ]
}).Class({
	constructor: function() {}
});

document.addEventListener('DOMContentLoaded', function() {
	platformBrowserDynamic().bootstrapModule(Module);
});
