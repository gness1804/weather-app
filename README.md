# WeatherApp

![Screenshot](https://github.com/gness1804/weather-app/blob/master/src/assets/icons/screenshot.png)

This project is based on the fourth chapter of Aristeidis Bampakos, [Angular Projects: Second Edition](https://www.amazon.com/Angular-Projects-exploring-cutting-edge-technologies/dp/1800205260). <br />
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Running
To go to the production version and install as a PWA: [https://weather-app-d59cc.web.app](https://weather-app-d59cc.web.app).

## Basic Usage
Enter in a city name and either hit enter or tap on the magnifying glass icon. This will search for weather for a city. The  city can be anywhere in the world. You also enter in optional state/province and country params which have to be in order. Examples:
<br />
`chicago` <br />
`chicago, il, usa` <br />

If using a state/province, a country must be specified (so in other words `chicago, il` won't work).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Serve (prod)
Run `yarn server` to spin up a production version of the app in the browser. Or, simply run `yarn prod` to run both the build and server commands.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
