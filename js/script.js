/* Author: Peter Magenheimer

*/

$(function() {
 $('.layout span').each(function() {
   var rand = (Math.floor(Math.random()*8) + 1);
   $(this).addClass('offscreen-' + rand);
 });
});





