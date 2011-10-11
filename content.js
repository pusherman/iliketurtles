var ilt_Michelangelo = {
  divId : 'ilt_Michelangelo',
  speed : 7000,
  turtle : { 
    fileName : 'michelangelo.png',
    height : 240,
    width: 140
  },

  appear : function(speed) {
    img = $('<img />').attr('src', chrome.extension.getURL(this.turtle.fileName))

    div = $('<div />')
      .attr('id', this.divId)
      .css({
        position: 'fixed',
        bottom: (this.turtle.height * -1) + 'px',
        right: (this.turtle.width * -1) + 'px',
      }).append(img);

    $('body').append(div);

    var time = 4 / speed * 3000,
        bottom = div.css('bottom'),
        right = div.css('right');

    div.animate({bottom:'-5px', right:'0', position:'fixed'}, time, function() {
      $(this).animate({bottom:bottom, right:right, position:'fixed'}, time);
    });
  }
}


chrome.extension.sendRequest({action: 'gpmeGetOptions'}, function(settings) {
  if (Math.random() * 100 < Math.ceil(settings.frequency)) {
    ilt_Michelangelo.appear(settings.speed);
  }
});
