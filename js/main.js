$(function(){
  $('#container').mixItUp();



	var inputText;
  var $matching = $();


  $("#input").keyup(function(){

      inputText = $("#input").val().toLowerCase();

      // Check to see if input field is empty
      if ((inputText.length) > 0) {
        $( '.mix').each(function() {

           // add item to be filtered out if input text matches items inside the title
           if($(this).children('.title').text().toLowerCase().match(inputText)) {
            $matching = $matching.add($(this));
          }
          else {
            // removes any previously matched item
            $matching = $matching.not($(this));
          }
        });
        $("#container").mixItUp('filter', $matching);
      }

      else {
        // resets the filter to show all items if input is empty
        $("#container").mixItUp('filter', 'all');
      }

  });



 $(".various").fancybox({
   fitToView: true,
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
