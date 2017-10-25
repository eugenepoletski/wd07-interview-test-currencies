# boilerplate-react-redux-jest
Boilerplate for React applications with Redux for state management and Jest for testing

## Installation

1. create new project folder:
```
$ mkdir project_folder_name
```
2. clone repository to a project folder:
```
$ git clone https://github.com/web-developer-poletski/boilerplate-react-redux-jest project_folder-name
```
3. change to a project folder:
```
$ cd project_folder_name
```
4. remove existing git:
```
$ rm -r ./git
```
5. download node modules:
```
$ npm install
```
6. update project description:
```
$ npm init
```
## Scripts
|Command|Description|
|-------|-----------|
|$ npm run build| make new production build |
|$ npm run server| run production test server (serves static files from '/dist' and '/assets' project folders) |
|$ npm start | run development server with live reload |
|$ npm test| run tests with [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/)|
## Dependencies
### Production
* [React][1]
* [Redux][2]
* [Redux Thunk][3]
* [Fetch (polyfill)][4]

[1]: https://reactjs.org/ "React"
[2]: http://redux.js.org/ "Redux"
[3]: https://github.com/gaearon/redux-thunk "Redux Thunk"
[4]: https://github.com/github/fetch "Fetch (polyfill)"
