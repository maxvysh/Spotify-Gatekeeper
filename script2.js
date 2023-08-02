const accessTokenContainer = document.getElementById('access-token-container');
accessTokenContainer.textContent = `Access Token: ${accessToken}`;

var url = 'https://api.spotify.com/v1/me/top/artists?limit=3&offset=0';

var popularityScore;

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken
  }
}).then(function (response) {
  return response.json();
}
).then(function (data) {
  document.getElementById('artist-name-0').textContent = data.items[0].name;
  document.getElementById('artist-image-0').src = data.items[0].images[0].url;
  document.getElementById('artist-popularity-0').textContent = data.items[0].popularity;
  document.getElementById('artist-name-1').textContent = data.items[1].name;
  document.getElementById('artist-image-1').src = data.items[1].images[0].url;
  document.getElementById('artist-popularity-1').textContent = data.items[1].popularity;
  document.getElementById('artist-name-2').textContent = data.items[2].name;
  document.getElementById('artist-image-2').src = data.items[2].images[0].url;
  document.getElementById('artist-popularity-2').textContent = data.items[2].popularity;
  popularityScore = (data.items[0].popularity + data.items[1].popularity + data.items[2].popularity)/3;
  popularityScore = Math.round(popularityScore);
  document.getElementById('popularity-score').textContent = popularityScore + "/100";
});