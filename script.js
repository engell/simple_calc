$(function() {
    $('.button').on('mouseover', function() {
          $(this).css({background: '#1e1e1e'});

        $(this).click(function() {
            //$('.head').append($(this).attr("id"));
            var char=$(this).text();
            $('.head').append(char);
            console.log(char);
        });

         /*$(this).one('click', function (event) {  
            event.preventDefault();
            
            $('.head').append($(this).text());

            //$(this).prop('disabled', true);
            }); */


      })
      $('.button').on('mouseleave', function() {
          $(this).css({background: '#444'});
      });
});

/*
function reply_click(clicked_id){
    //alert(clicked_id);
    $('.head').append(clicked_id);
}
*/