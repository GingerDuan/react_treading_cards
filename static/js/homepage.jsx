'use strict';

function Homepage() {
  return (<React.Fragment>
    <div>HELLOOOOO from Ginger and Yoline!!!!</div>
    <a href="/cards"> Click this to cards page </a>
    <div><img src='/static/img/balloonicorn.jpg' alt="profile" /></div>
  </React.Fragment>);
}



ReactDOM.render(<Homepage />, document.querySelector('#app'));
//first arg - the function component on what we want to render, 
//and the second argument is the selector to find ele ID app "mount the component"