
import axios from 'axios';

const url = 'https://busana-prod.centricsoftware.com/csi-requesthandler/api/v2/session';

const form = document.getElementById('login-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const data = {
    username,
    password,
  };

  axios.post(url, data)
    .then(function (response) {
      // Berhasil!
      const token = response.data.token;
      document.getElementById('token').textContent = token;
    })
    .catch(function (error) {
      // Gagal!
      document.getElementById('error-message').textContent = error.message;
    });
});

