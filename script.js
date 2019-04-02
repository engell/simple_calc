var number = 0;
var numberstring ="";
var timer = Date.now();

$(function() 
{    
    $('.button').on('mouseover', function() 
    {
        $(this).css({background: '#1e1e1e'});
        $(this).on('click', function()
        {
            var keypressed = $(this).text();
            keyclick(keypressed);
        });

    });
    $('.button').on('mouseleave', function() 
    {
        $(this).css({background: '#444'});
    });
});

function keyclick(char)
{
    if (Date.now() < timer + 100)
    {
        return false;
    }
    else
    {
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
            
            //char = 0;
            $('.head').html(numberstring);
            

        }
        console.log(number);
        number++;
        //console.log(numberstring);
        timer = Date.now();
        
        
        
    }
}