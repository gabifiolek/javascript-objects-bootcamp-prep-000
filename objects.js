var playlist = {
  songTitle: 'Let It Go',
  artistName: 'John Legend'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist) {
  delete playlist.artistName;
  playlist
}
