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
  document.getElementById('artist-popularity-0').textContent = "Popularity score: " + data.items[0].popularity;
  document.getElementById('artist-name-1').textContent = data.items[1].name;
  document.getElementById('artist-image-1').src = data.items[1].images[0].url;
  document.getElementById('artist-popularity-1').textContent = "Popularity score: " + data.items[1].popularity;
  document.getElementById('artist-name-2').textContent = data.items[2].name;
  document.getElementById('artist-image-2').src = data.items[2].images[0].url;
  document.getElementById('artist-popularity-2').textContent = "Popularity score: " + data.items[2].popularity;
  popularityScore = (data.items[0].popularity + data.items[1].popularity + data.items[2].popularity) / 3;
}).then(function () {
  popularityScore = Math.round(popularityScore);
  document.getElementById('popularity-score').innerText = popularityScore + "/100";
  document.documentElement.style.setProperty('--maxW', popularityScore + '%');

  //Change the data-bars content
  const progressBar = document.getElementsByClassName('progress-bar')[0];
  const interval = setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
    progressBar.dataset.label = Math.round(width) + '%';
    if (width > popularityScore) {
      clearInterval(interval);
    }
  }, 5)

  //Change the gatekeeper-text content
  if (popularityScore <= 100 && popularityScore >= 80) {
    document.getElementById('gatekeeper-text').textContent = "You're like a human radio station, grooving to chart-toppers and dancing to the latest TikTok hits without missing a beat! You keep it mainstream, and that's cool!";
  }
  else if (popularityScore < 80 && popularityScore >= 60) {
    document.getElementById('gatekeeper-text').textContent = "You dabble in the mainstream, but you also love that extra sprinkle of weirdness. Think quirky indie pop and funky remixes that keep you grooving with a side of eyebrow-raising.";
  }
  else if (popularityScore < 60 && popularityScore >= 40) {
    document.getElementById('gatekeeper-text').textContent = "You're ahead of the curve, discovering underground artists before they become cool. You love those 'I heard them first!' moments, and your taste is always on point.";
  }
  else if (popularityScore < 40 && popularityScore >= 20) {
    document.getElementById('gatekeeper-text').textContent = "You embrace the obscure, diving deep into experimental sounds and genres most people haven't even heard of. If it's rare and unconventional, you're probably already a big fan.";
  }
  else {
    document.getElementById('gatekeeper-text').textContent = "You're a true music archaeologist, digging through dusty vinyl collections, discovering lost gems and artists forgotten by time. You're like musical Indiana Jones, always one step ahead of everyone else.";
  }
});