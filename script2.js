const accessTokenContainer = document.getElementById('access-token-container');
accessTokenContainer.textContent = `Access Token: ${accessToken}`;

var url = 'https://api.spotify.com/v1/me/top/artists?limit=3&offset=0';

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken
  }
}).then(function (response) {
  return response.json();
}
).then(function (data) {
  console.log(data);
  document.getElementById('artist-name').textContent = data.items[0].name;
  document.getElementById('artist-image').src = data.items[0].images[0].url;
  document.getElementById('artist-genres').textContent = data.items[0].genres[0];
  document.getElementById('artist-popularity').textContent = data.items[0].popularity;
  document.getElementById('artist-followers').textContent = data.items[0].followers.total;
});