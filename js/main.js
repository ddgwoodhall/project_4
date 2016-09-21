$(function(){
  $('#container').mixItUp();



	var inputText;
  var $matching = $();

  // Delay function
  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $("#input").keyup(function(){
    // Delay function invoked to make sure user stopped typing
    delay(function(){
      inputText = $("#input").val().toLowerCase();

      // Check to see if input field is empty
      if ((inputText.length) > 0) {
        $( '.mix').each(function() {
          $this = $("this");

           // add item to be filtered out if input text matches items inside the title
           if($(this).children('.title').text().toLowerCase().match(inputText)) {
            $matching = $matching.add(this);
          }
          else {
            // removes any previously matched item
            $matching = $matching.not(this);
          }
        });
        $("#container").mixItUp('filter', $matching);
      }

      else {
        // resets the filter to show all item if input is empty
        $("#container").mixItUp('filter', 'all');
      }
    }, 200 );
  });

 $(".various").attr('rel', 'gallery').fancybox({
   fitToView: true, // avoids scaling the image to fit in the viewport
   beforeShow: function () {
        // set size to (fancybox) img
        $(".fancybox-image").css({
            "max-width": 800,
            "max-height": 600
        });
        // set size for parent container
        this.width = 800;
        this.height = 600;
    },
   openEffect  : 'none',
   closeEffect : 'none',
   nextEffect  : 'none',
   prevEffect  : 'none',
   padding: 0,
   margin      : [80, 120, 80, 120],
   helpers : {
     title: {
       type: 'outside'
     }
   }


 });






});
