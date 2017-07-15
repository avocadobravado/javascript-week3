# Angular CRUD - Club Manager

#### Week 3 Independent Project - JavaScript

#### By **Rose Sponseller, July 14, 2017**

## Description

The High Tech Low Life Club is a web application built with Angular for a group of cyberpunk enthusiasts. As a user, you can view information about the club, see a list of the members, can click on the members to read their full details. As an administrator, you can edit member information, delete members, and add new members.

## Screenshots of Web Application

![screenshot of project](https://github.com/avocadobravado/javascript-week3/raw/master/src/assets/scs01.png?raw=true)

![screenshot of project](https://github.com/avocadobravado/javascript-week3/raw/master/src/assets/scs02.png?raw=true)

![screenshot of project](https://github.com/avocadobravado/javascript-week3/raw/master/src/assets/scs03.png?raw=true)

### Installation

#### Prerequisites

* Web browser with ES6 compatibility
* Node.js
* npm
* Angular
* TypeScript
* Git

Open your terminal and clone this repository with the following command:

```
$ git clone https://github.com/avocadobravado/javascript-week3
```

Move into the cloned repository:

```
$ cd javascript-week3
```

Create an api-keys.ts file:

```
$ touch src/app/api-keys.ts
```

Go to http://firebase.google.com, sign up for an account, then click on "Go to Console", "Add project" then add your project's name, then click on "Add Firebase to your Web App", finally add the information from the pop up modal from Firebase to your api-keys.ts file (it should look something like this, but use your own information and not what is provided below):

```
export var masterFirebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "",
  messagingSenderId: "xxxxx"
};
```

Install npm and Bower by typing:

```
$ npm install
$ bower install
```

Set up the build:

```
$ ng build
```

Start the server:

```
$ ng serve
```

The previous step should immediately open up a web browser such as Google Chrome and take you to the site, but if not, visit the following address in your preferred browser:

```
localhost:4200
```

## Built With

### Code
* HTML
* CSS
* Bootstrap
* JavaScript
* TypeScript
* Angular 2

### Tools &amp; Dependencies
* Node
* Bower
* npm
* Angular CLI
* Firebase

### Design
* Google Fonts

## Support and contact details

* Feel free to reach out with suggestions at rosesponseller@gmail.com

## Acknowledgements

* [virtuaverse](https://twitter.com/virtuaverse?lang=en) - for the GIF files

## License

This project is licensed under the MIT License

**_Rose Sponseller_** Copyright (c) 2017
