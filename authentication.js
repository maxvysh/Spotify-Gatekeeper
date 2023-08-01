function loginWithSpotify() {
    const clientId = '89fb532c08584190b4d8d6e99b5b0e23';
    const redirectUri = 'http://127.0.0.1:5500/rootfolder/signedin.html';
    const scopes = ['user-read-private', 'user-read-email', 'user-top-read']; // Add the necessary scopes for your app

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;

    window.location.href = authUrl;
}

var accessToken = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {}).access_token; 