$( document ).ready(function() {
  var player;
  $('.serm-video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'cfn40rJaCd4',
      events: {
        'onReady': videoplay,
      }
    });
  })
  function videoplay(event) {
    event.target.playVideo();
  }

  //faq
  // $('.serm-faq-card-trigger').click(function(){
  //   $(this).next('.serm-faq-card-content').toggle(200);
  // });

  //countries
  // $('.countries-title').click(function(){
  //   $(this).next('.countries-list').toggle();
  // });
  

});

