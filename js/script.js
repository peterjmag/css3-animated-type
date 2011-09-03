/* Author: Peter Magenheimer

*/

$(function() {
 $('.layout span').each(function() {
   var rand = (Math.floor(Math.random()*17) + 1);
   $(this).addClass('offscreen-' + rand);
 });
});





