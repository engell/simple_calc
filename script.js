$(function() {
    var number;
    var numberstring ="";
    var char;
    $('.button').on('mouseover', function() {
          $(this).css({background: '#1e1e1e'});

        $(this).click(function() {
            //$('.head').append($(this).attr("id"));
            
            char=parseInt($(this).text());
            if (isNaN(char)){
                char=$(this).text();
                console.log(char);

            }else{
                char=$(this).text();
                
                console.log(char);

                
                number = String(char);
                numberstring = numberstring + number;
                number = "";
                char = "";
            }
            

            

            $('.head').html(numberstring);
            console.log(numberstring);
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