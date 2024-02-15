window.onload = function() {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://busana-test.centricsoftware.com/csi-requesthandler/api/v2/session';
  const data = {
    username: 'Administrator',
    password: 'P(}7PY$^%tLJvrDM'
  };
  
  fetch(corsAnywhereUrl + targetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    displayResponse(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
  });
};

function displayResponse(responseData) {
  document.getElementById('responseContent').innerText = JSON.stringify(responseData, null, 2);
}
