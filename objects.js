var playlist = {
  songTitle: 'Let It Go',
  artistName: 'John Legend'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName:] artistName, [songTitle:] songTitle})
}

function removeFromPlaylist(playlist, artistName) {

}
