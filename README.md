# react-unsplash-container [![npm](https://img.shields.io/npm/v/react-unsplash-container.svg)](https://www.npmjs.com/package/react-unsplash-container)

[![License](https://img.shields.io/github/license/panz3r/react-unsplash-container.svg)](LICENSE.md)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dm/react-unsplash-container.svg)](https://www.npmjs.com/package/react-unsplash-container)

[![Build Status](https://travis-ci.org/panz3r/react-unsplash-container.svg)](https://travis-ci.org/panz3r/react-unsplash-container)
[![GitHub issues](https://img.shields.io/github/issues/panz3r/react-unsplash-container.svg)](https://github.com/panz3r/react-unsplash-container/issues)

> A simple [React](https://facebook.github.io/react/) container with background images taken from [Unsplash.com](https://unsplash.com)

## Install

```bash
$ yarn add react-unsplash-container
```

## Usage

Simply import `Unsplashed` from `react-unsplash-container` and use it like a `div`
```js
import React, { Component } from 'react';
import { Unsplashed } from 'react-unsplash-container'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Unsplashed className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Unsplashed>
    );
  }
}

export default App;
```

## Options
An `Unsplashed` container can be customized using the following properties

### Source
Specify a source for the background image:
- from an Unsplash user
```js
<Unsplashed 
  src={{ username: 'username' }}
></Unsplashed>
```
- from an Unsplash user likes
```js
<Unsplashed 
  src={{ username: 'username', likes: true }}
></Unsplashed>
```
- from an Unsplash collection
```js
<Unsplashed 
  src={{ collectionId: '12345' }}
></Unsplashed>
```

### Size
Specify a custom size for the background source image
```js
<Unsplashed 
  size={{ width: 1600, height: 900 }}
></Unsplashed>
```

### Fixed
Specify if the image should be the same for a period of time

See [Unsplash Source docs](https://source.unsplash.com) for more info.

- Daily image
```js
<Unsplashed 
  fixed="daily"
></Unsplashed>
```
- Weekly image
```js
<Unsplashed 
  fixed="weekly"
></Unsplashed>
```

### Keywords
Specify the keywords used to pick a background image
```js
<Unsplashed
  keywords={['nature', 'water']}
></Unsplashed>
``` 