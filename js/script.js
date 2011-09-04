/* Author: Peter Magenheimer

*/

$(function() {
  $('.layout span').each(function() {
    var rand = (Math.floor(Math.random()*17) + 1);
    $(this).addClass('offscreen-' + rand);
  });
  $(document).bind('keydown', 'a',function(evt){$('.a .legend').focus()});
  $(document).bind('keydown', 'b',function(evt){$('.b .legend').focus()});
  $(document).bind('keydown', 'c',function(evt){$('.c .legend').focus()});
  $(document).bind('keydown', 'd',function(evt){$('.d .legend').focus()});
  $(document).bind('keydown', 'e',function(evt){$('.e .legend').focus()});
  $('.legend').mouseover(function(){$('.legend').blur()});
});






