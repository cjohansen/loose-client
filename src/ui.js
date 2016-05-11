export default (root, events) => {
  return data => {
    if (data.session) {
      root.innerHTML = `<h1>Willkommen ${data.session.user}</h1>`;
    } else {
      root.innerHTML = `<div class="container" style="margin-top: 60px">
        <h2>Join the chatting craze</h2>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Username">
          </div>
          <button type="submit" class="btn btn-primary">Join</button>
        </form>
      </div>`;

      const form = root.getElementsByTagName('form')[0];

      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = e.target.getElementsByTagName('input')[0];
        events.emit('login', input.value);
        input.value = '';
      });
    }
  };
};
