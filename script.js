var number = 0;
var numberstring = "0";
var timer = Date.now();
var firstfactor;
var secondfactor;
var equation;

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
            if (char=="ce")
            {
                clear();
            }
            if (char==".")
            {
                append(char);
            }
            if (char=="=")
            {
                result();
            }
            else
            {
                calc(char);
            }
        }
        else
        {
            append(char);
        }
        timer = Date.now();
    }
}

function append(num)
{
    /*if (num==0)
    {
        numberstring = num;
        /*
        if (String(num) == "0")
        {
            numberstring = "0";
            number = number - 1;
        }
        else
        {
            numberstring = String(num);
            console.log("punto");
        }
    }
    else
    {
        numberstring = numberstring + String(num);
        
    }*/
    //

    if (isNaN(parseFloat(numberstring)))
    {
        console.log("esto no se va a ver nunca!!!");
        numberstring = "0";
        number = parseFloat(numberstring);
    }
    else
    {
        //numberstring = $('.head').text();
        //numberstring = String(numberstring);
        numberstring = numberstring + String(num);
        //parseFloat(numberstring);
        number = parseFloat(numberstring);
    }


    $('.head').html(numberstring);
    console.log(number);
    
}

function clear()
{
    number = 0;
    numberstring = "0";
    $('.head').html(number);
}

function calc(t)
{
    firstfactor = parseFloat(numberstring);
    equation = t;
    //console.log(firstfactor);
    //result();
    clear();
}

function result()
{
    secondfactor = parseFloat(numberstring);
    clear();
    if (equation == "+")
    {
        numberstring = firstfactor + secondfactor;
    }
    if (equation == "-")
    {
        numberstring = firstfactor - secondfactor;
    }
    if (equation == "*")
    {
        numberstring = firstfactor * secondfactor;
    }
    if (equation == "/")
    {
        numberstring = firstfactor / secondfactor;
    }
    firstfactor = 0;
    secondfactor = 0;
    equation = 0;
    number = 0;
    $('.head').html(numberstring);
}