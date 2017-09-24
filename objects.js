var playlist = {
  'John Legend': 'Let it Go'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  if (artistName) {
  delete playlist.artistName;
  }
  playlist;
}
