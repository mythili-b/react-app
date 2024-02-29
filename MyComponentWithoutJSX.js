import React from 'react';
// Component without JSX
const MyComponentWithoutJSX = () => {
 return React.createElement('div', null, [
 React.createElement('h2', null, 'Welcome..'),
 React.createElement('p', null, 'This is React component without JSX.'),
 ]);
}
export default MyComponentWithoutJSX;