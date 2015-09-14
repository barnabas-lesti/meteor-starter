# Meteor Starter application

The application is created to help quickly bootstrap a meteor application. It has friendly ecosystem, created according to the [Meteor docs](http://docs.meteor.com/) and other useful things found regarding this awesome technology.

## Packages
- The base of the app is the [meteor-platform](https://atmospherejs.com/meteor/meteor-platform) package. We can remove this and only add the packages we need from it.
- The [autopublish](https://atmospherejs.com/meteor/autopublish) and [insecure](https://atmospherejs.com/meteor/insecure) packages have been removed.
- CSS precompilation is done with [less](https://atmospherejs.com/meteor/less).
- Router of the app is [iron:router](https://atmospherejs.com/iron/router).
- User management with [accounts-password](https://atmospherejs.com/meteor/accounts-password).
- Unit testing is done via [sanjo:jasmine](https://atmospherejs.com/sanjo/jasmine) (reporting: [velocity:html-reporter](https://atmospherejs.com/velocity/html-reporter)).

## Meteor behavior
### File structure
- **Deeper files** are always loaded **first**.
- ```main.*``` files are loaded **last** in the current directory level.
- ```*.html``` files are always loaded **before other files**.
- The ```lib``` top-level directory is loaded **before any other directory** (files inside are accessible both on the client and the server).
- Files in the ```client``` top-level directory are only accessible on the **client**.
- Files in the ```server``` top-level directory are only accessible on the **server**.
- If using ```Meteor.isServer``` in a non ```server``` top-level directory, **the code will still be accessible on the client**.
- Files in the ```public``` top-level directory are served as-is to the client (no need to include ```public``` when referencing a file, ```/file.ext``` is enough).
- Files in the ```private``` top-level directory are only accessible from **server-code** via the ```Assets``` API. Files in this directory are **not autoloaded by Meteor**.
- Files in the ```tests``` top-level directory are not loaded anywhere.
- Any other folder or file is loaded on both the client and the server.

### Templates
- Files are automatically loaded, no need for imports.
- ```<head>``` and ```<body>``` tags that Meteor founds in the project are concatenated.
- ```*.less``` files are automatically compiled to ```*.css``` files and attached to the webapp. To prevent this default behavior, we need to use the ```.import.less``` extension for our ```less``` files.

### Routing
- By default routes are defined on the client.
- Routes should not be defined for both sides (both sided source is accessible from the client).
- A good practice is to keep client side routes in the ```client/routes``` directory, server side routes in the ```server/routes``` prefixed with a ```{ where: 'server' }``` object (this way server side routes are protected and the app can behave more like a SPA app thanks to the client side routing).

### Testing
- [Velocity](https://velocity.readme.io/) is Meteors officially supported testing framework (Velocity by on its own does not include any testing libraries).

***

## Application conventions (personal preference)
- Basic object names should follow the lower camel case pattern: ```someBasicOnject```.
- Classes and other higher elevation objects should be upper camel cased: ```SomeGodlikeCreation```.
- Non objects, file names and string literals (classes, id-s, page names, etc.) should follow a hyphened pattern: ```name-like-this```.
- Object structure in a string literal should use dot notation: ```name="someObj.someProp"```.
- For readability, lines in files should not be longer than 80 characters.

### Templates
- Templates and their controllers and style files go in the ```client/views``` directory.
- Depending on project size and complexity, templates can go in a ```pages```, ```modules```, ```components``` directory.
- Controller and style files should be called like their template file but with ```*.js``` or ```*.import.less``` extension, and allocated to the proper directory. For example the LESS file for ```views/pages/showcase.html``` should be in ```styles/pages/showcase.import.less``` and the script file in ```scripts/pages/showcase.js```.
- If templates have some kind of relation with each other, they should be grouped in a dedicated directory (```some-page-item``` and ```some-page-listing``` templates can go in the ```some-page``` directory).
- Template script (controller) and style files are not required.
- The base layout is created in the ```main.html``` file located in the root of the ```views``` directory.
- The ```main.less``` file should only contain the ```@import``` of needed ```less``` files.
- Template files should only contain the template definition: ```<template name="..."></template>```.
- Utility files should go in the proper ```utils``` folder.

### Routing
- Route definitions go in the ```routes``` directory (depending on where the route is needed: client or server).
- Controller files should be created in the appropriate ```routes/controllers``` directory.
- If an URL part needs to have space, it should be handled with a hyphen: ```page/need-some-space/whoho```.

### Collections
- Core collection definitions should go in the ```lib/collections``` directory or file, if it only contains the collection definitions. This way collections are created in **MongoDB** and in **minimongo** as well (enabling the [Optimistic UI](http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation) feature of Meteor).
- Publications, allow and deny rules should be created on the server: ```server/collections```.
- Subscriptions to publications are done on the client where it is needed, no need to group this kind of logic into separate files. We can subscribe to publications globally, but in a lot of cases we should only subscribe when we need data (controller actions for example). This way a subscriptions lifecycle is under control.
- File names of collection definition and rules should represent the name of the collection.

### Testing
- The app uses [Jasmine](http://jasmine.github.io/) as a testing library.
- Tests run automatically while the app runs in development mode locally.
- Tests and Velocity are excluded automatically when we build our app for production.
- Test go in the ```tests/jasmine``` directory in the appropriate directory (for example: client unit tests go in ```/client/unit```).
