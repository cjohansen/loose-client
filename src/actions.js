export default (apiClient, events, render) => {
  events.on('login', username => {
    apiClient.login(username)
      .then(session => render({session}));
  });

  events.on('postMessage', message => {

  });
}
