/*global fetch */
import 'whatwg-fetch';
import 'babel-polyfill';

export default config => {
  return {
    login(user) {
      return fetch(`http://${config.host}/api/sessions`, {
        method: 'post',
        body: JSON.stringify({user}),
        headers: {'content-type': 'application/json'}
      })
      .then(res => res.json())
      .then(({body}) => body)

      // return fetch(`http:///${config.host}/api`)
      //   .then(res => res.json())
      //   .then(({links}) => fetch(links.activeSessions.url))
      //   .then(res => res.json())
      //   .then(data => {
      //     return fetch(data.links.createSession.url, {
      //       method: 'post',
      //       body: JSON.stringify({user: 'baltazar'}),
      //       headers: {
      //         'content-type': 'application/json'
      //       }
      //     })
      //   })
      //   .then(res => res.json())
      //   .then(({links}) => fetch(links.postMessage.url, {
      //     method: 'post',
      //     body: JSON.stringify({text: 'Howdy'}),
      //     headers: {
      //       'content-type': 'application/json'
      //     }
      //   }))
      //   .then(res => res.json())
      //   .then(data => console.log(data));
    }
  };
};
