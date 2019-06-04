[![Build Status](https://travis-ci.org/luddwichr/react-playground.svg?branch=master)](https://travis-ci.org/luddwichr/react-playground)
[![codecov](https://codecov.io/gh/luddwichr/react-playground/branch/master/graph/badge.svg)](https://codecov.io/gh/luddwichr/react-playground)



This project provides a scaffold for using the following technologies together:
- [Yarn](https://yarnpkg.com/lang/en/), for "Fast, reliable, and secure dependency management"
- [Parcel](https://parceljs.org/), a "Blazing fast, zero configuration web application bundler"
- [React](https://reactjs.org/), a "JavaScript library for building user interfaces"
- [Redux](https://redux.js.org/), a "predictable state container for JavaScript apps"
- [Typescript](http://www.typescriptlang.org/), a "superset of JavaScript that compiles to clean JavaScript output"
- [Jest](https://jestjs.io/), "Delightful JavaScript Testing"
- [Enzyme](https://github.com/airbnb/enzyme), "JavaScript Testing utilities for React"
- [TsLint](https://palantir.github.io/tslint/), an "extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors"
- [Prettier](https://github.com/prettier/prettier), an "opinionated code formatter"

See the following resources for more details:
- [A rather gentle intro to using React with Typescript](https://github.com/Microsoft/TypeScript-React-Starter)
- [Typescript with React, using parcel bundler](https://github.com/adhrinae/ts-react-parcel)
- [How to use React/Redux with Typescript](https://github.com/piotrwitek/react-redux-typescript-guide)
- [Strongly typing redux actions / reducers / epics with Typescript](https://github.com/piotrwitek/typesafe-actions)
- [Using redux-observable](https://github.com/mitsuruog/react-redux-observable-typescript-sample)
- [Using a Runtime library for TypeScript helpers to optimize production code](https://github.com/Microsoft/tslib)
- [React/Redux Style Guide](https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf#file-react-redux-style-guide-md)
- [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Barrel files](https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md)
- [Barrel file pattern discussion](https://medium.com/@adrianfaciu/barrel-files-to-use-or-not-to-use-75521cd18e65)
- [Defining defaultProps troubles in Typescript](https://medium.com/@martin_hotell/react-typescript-and-defaultprops-dilemma-ca7f81c661c7)
  (I could not yet figure out an optimal solution, although there is apparently [support for defaultProps since Typescript 3.0](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html))
- [Testing React and Redux](https://hacks.mozilla.org/2018/04/testing-strategies-for-react-and-redux/)
  
Things is stumbled upon:
- [Enable Service Workers?](https://github.com/parcel-bundler/parcel/issues/331)
  => currently not really possible since Parcel does not support PWA (serviceworker.js is not bundled as separate file)
- Hot Module Reloading sometimes crashes, could be any of [those issues](https://github.com/parcel-bundler/parcel/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+HMR)
- Parcel has a lot more open issues on Github than Webpack. The former is under active development though and pretty new (version 1 released in December 2017)

Things i didn't check out yet:
- image and css minification
- testing of redux store logic
- end-to-end testing