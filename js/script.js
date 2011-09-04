/* Author: Peter Magenheimer

*/

$(function() {
  $('.layout span').each(function() {
    var rand = (Math.floor(Math.random()*17) + 1);
    $(this).addClass('offscreen-' + rand);
  });
  $(document).bind('keydown', 'a',function(evt){$('.a .legend')[0].focus()});
  $(document).bind('keydown', 'b',function(evt){$('.b .legend')[0].focus()});
  $(document).bind('keydown', 'c',function(evt){$('.c .legend')[0].focus()});
  $(document).bind('keydown', 'd',function(evt){$('.d .legend')[0].focus()});
  $(document).bind('keydown', 'e',function(evt){$('.e .legend')[0].focus()});
});






