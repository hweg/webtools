function playSong(song) {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = song;
    audioPlayer.play();
}