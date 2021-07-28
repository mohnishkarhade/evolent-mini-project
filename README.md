# Evolant Contact App

#### **Boilerplate** 🍱 :

---

##### **Package Manager** : NPM

Fast and most used package manager

##### **CSS Preprocessors** : SCSS

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

##### **CSS Framework** : Bootstrap

The world’s most popular front-end open source toolkit.

##### **CSS Naming Convention** : BEM

BEM naming convetion helps me to organise component level css and also improve readability and easy to identify classes.

##### **Javascript Module Bundler** : Webpack

Hard to configure but very useful and full of automation features.

##### **Javascript Framework/Library** : ReactJs

React, because its extra simplicity and flexibility.

#### **Structure** 📐 :

---

```
|--dist/                        # -> Static version of app ready to upload
|--node_modules/                # -> Node.js packages
|--public/                      # -> Public html and assets files
|--src/                         # -> Source files
|   |--components/              # -> React components
|   |   |--common/
|   |   |--pages/
|   |--services/                # -> Injectable services
|   |--tests/                   # -> Test cases
|   |--utilities/               # -> Common utility
|--.env                         # -> Environment variable file
|--babel.config.json            # -> Babel config and presets
|--package-lock.json            # -> NPM lock file
|--package.json                 # -> Node.js dependencies and scripts
|--tsconfig.json                # -> Typescript settings
|--webpack.config.js            # -> Webpack config
```

### Requirements

Make sure all dependencies have been installed before moving on:

- [npm](https://www.npmjs.com/get-npm)
- [Node.js](https://nodejs.org/en/download/) >= 8.16.0
- [Gulp](http://gulpjs.com/)

### Quick start: Installation

Clone this repository and run

- `npm install` to install dependencies

### Tasks

| Task Name            | Description                                                                | Environment |
| :------------------- | :------------------------------------------------------------------------- | :---------- |
| `npm run start`      | Generate a development environment, start the server and watch for changes | Development |
| `npm run build`      | Compile development code                                                   | Development |
| `npm run build:prod` | Compile production code                                                    | Production  |
| `npm run test`       | Run test cases                                                             | Production  |
