# generator-esri-widget [![Build Status](https://secure.travis-ci.org/tomwayson/generator-esri-widget.png?branch=master)](https://travis-ci.org/tomwayson/generator-esri-widget)

> [Yeoman](http://yeoman.io) generator to create custom Dojo widgets for Esri web applications.

## About

This generator scaffolds out the boilerplate files that are need each time you create a new custom Dojo widget for a web application using Esri's ArcGIS API for JavaScript.

<!-- TODO:
![Screenshot](https://raw.githubusercontent.com/tomwayson/generator-esri-widget/master/docs/images/yo-esri-widget.png)
-->

## Getting Started

### Installation

To install Yeoman from npm (if not already), run:

```bash
$ npm install -g yo
```

To install generator-esri-widget from npm, run:

```bash
$ npm install -g generator-esri-widget
```

### Running the Generator

Navigate to your application's root folder and run the following at the command line:

```
$ yo esri-widget
```

A few opinionated files will be created. If you created a widget called `test` in the `app` folder, the following files will be created for you.

      'app/test.js',
      'app/templates/test.html',
      'app/tests/testTests.html',
      'app/tests/spec/Spectest.js',
      'app/resources/test.css'

The `/test.js` file will contain your widget logic.
`/templates/test.html` will be an empty template file if your widget has a template.
`tests/testTests.html` is an html page that you can load to see your widget in isolation.
`tests/spec/Spectest.js` is a [jasmine](http://jasmine.github.io/) test spec file with a default test instantiating your new widget.
`resources/test.css` is the style sheet containing styles specific to your new widget.

## License

MIT
