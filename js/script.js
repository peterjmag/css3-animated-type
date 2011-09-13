/* Author: Peter Magenheimer

*/

$(function() {
  $('.layout span').each(function() {
    var rand = (Math.floor(Math.random()*17) + 1);
    $(this).removeClass(function (index, css) {
        return (css.match (/\boffscreen-\S+/g) || []).join(' ');
    });
    $(this).addClass('offscreen-' + rand);
  });

  $(document).bind('keydown', 'a',function(evt){$('.a .legend').focus()});
  $(document).bind('keydown', 'b',function(evt){$('.b .legend').focus()});
  $(document).bind('keydown', 'c',function(evt){$('.c .legend').focus()});
  $(document).bind('keydown', 'd',function(evt){$('.d .legend').focus()});
  $(document).bind('keydown', 'e',function(evt){$('.e .legend').focus()});
  $(document).bind('keydown', 'f',function(evt){$('.f .legend').focus()});
  $(document).bind('keydown', 'g',function(evt){$('.g .legend').focus()});
  $(document).bind('keydown', 'h',function(evt){$('.h .legend').focus()});
  $(document).bind('keydown', 'i',function(evt){$('.i .legend').focus()});
  $(document).bind('keydown', 'j',function(evt){$('.j .legend').focus()});
  $(document).bind('keydown', 'k',function(evt){$('.k .legend').focus()});
  $(document).bind('keydown', 'l',function(evt){$('.l .legend').focus()});
  $(document).bind('keydown', 'm',function(evt){$('.m .legend').focus()});
  $(document).bind('keydown', 'n',function(evt){$('.n .legend').focus()});
  $(document).bind('keydown', 'o',function(evt){$('.o .legend').focus()});
  $(document).bind('keydown', 'p',function(evt){$('.p .legend').focus()});
  $(document).bind('keydown', 'q',function(evt){$('.q .legend').focus()});
  $(document).bind('keydown', 'r',function(evt){$('.r .legend').focus()});
  $(document).bind('keydown', 's',function(evt){$('.s .legend').focus()});
  $(document).bind('keydown', 't',function(evt){$('.t .legend').focus()});
  $(document).bind('keydown', 'u',function(evt){$('.u .legend').focus()});
  $(document).bind('keydown', 'v',function(evt){$('.v .legend').focus()});
  $(document).bind('keydown', 'w',function(evt){$('.w .legend').focus()});
  $(document).bind('keydown', 'x',function(evt){$('.x .legend').focus()});
  $(document).bind('keydown', 'y',function(evt){$('.y .legend').focus()});
  $(document).bind('keydown', 'z',function(evt){$('.z .legend').focus()});
  $(document).bind('keydown', 'esc',function(evt){$('.legend').blur()});

  $('.legend').mouseover(function(){
    $('.legend').blur();
    $('#about').removeClass('show');
  });

  $('#show-about').click(function(){
    $('#about').toggleClass('show');
  })
});






