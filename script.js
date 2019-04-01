$(function() {
    var number = 0;
    var numberstring ="";
    var char;
    var timer=0;
    $('.button').on('mouseover', function() {
        $(this).css({background: '#1e1e1e'});

        $(this).click(function() {
            //$('.head').append($(this).attr("id"));
            if (timer==1)
            {
                return false;
            }
            else
            {
                char=$(this).text();
                if (isNaN(parseInt(char)))
                {
                    console.log(char);
                }
                else
                {
                    //console.log(char);

                    if (number==0)
                    {
                        numberstring = char;
                    }
                    else
                    {
                        numberstring = numberstring + char;
                    }
                    
                    char = 0;
                    $('.head').html(numberstring);
                    

                }
                console.log(number);
                number++;
                console.log(numberstring);
                console.log(timer)

                timer=1;
                
                    
                    for (i = 0; i < 2000; i++) 
                    {
                        //console.log(i);
                    }
                    timer=0;
                    console.log("Timer="+timer);
                
            }
            
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

