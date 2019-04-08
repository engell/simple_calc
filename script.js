var number = 0;
var numberstring = "";
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
        console.log(number);
        timer = Date.now();
    }
}

function append(num)
{
    if (number==0)
    {
        //numberstring = num;
        
        if (String(num) == "0")
        {
            numberstring = "0";
            number = -1;
        }
        else
        {
            numberstring = String(num);
        }
    }
    else
    {
        numberstring = numberstring + String(num);
    }
    console.log(num);
    $('.head').html(numberstring);
    number++;
}

function clear()
{
    number = 0;
    numberstring = 0;
    $('.head').html(numberstring);
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