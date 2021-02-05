$( document ).ready(function() {
  var player;
  $('.serm-video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      // height: '360',
      // width: '640',
      videoId: 'cfn40rJaCd4',
      events: {
        'onReady': videoplay,
      }
    });
  })
  function videoplay(event) {
    event.target.playVideo();
  }
});