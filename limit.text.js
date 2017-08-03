/*!
  jQuery limit-text plugin
  @name limit-text
  @author Michael Petruniak
  @version 1.0
  @date 02/09/2014
  @category jQuery plugin
  @copyright (c) 2014
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/

(function ($) {
  $.fn.limitText = function (options) {
    var defaults = {
      length:100,
      ellipsisText:'...'
    }, options = $.extend(defaults, options);

    return this.each(
      function (i, obj) {
        if ($(obj).text().length > options.length) {
          var text = $(obj).text().substr(0, options.length);
          for (i=text.length; i > 0; i--) {
            if (text.charAt(i -1) == ' ') {
              $(obj).text(text + options.ellipsisText);
              break;
            }
            else {
              text = text.slice(0, text.length -1);
            }
          }
        }
      }
    );
  };
})(jQuery);
