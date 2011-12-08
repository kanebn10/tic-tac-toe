var xScore = 0;
var oScore = 0;
var turn = 0;

$(document).ready(function(){
    
    initialize();
    
    $('#1_1, #1_2, #1_3, #2_1, #2_2, #2_3, #3_1, #3_2, #3_3').click(function(){
        
        if(!$(this).hasClass("notClickable")){
            if(turn == 0){
                $(this).html("<span>X</span>");
                $(this).addClass("notClickable");
                $('#board').addClass($(this).attr("id") + "X");
            }
            else{
                $(this).html("<span>O</span>");
                $(this).addClass("notClickable");
                $('#board').addClass($(this).attr("id") + "O");
            }
            turn = (turn + 1) % 2;
            checkForWin($('#board').attr("class"));
        }
    });
});

//This function initializes the board. It resets all IDs and classes, and clears text from the board.
function initialize(){
        
        turn = 0;
    
        $('#1_1').attr("class", "right bottom");
        $('#1_2').attr("class", "right bottom left");
        $('#1_3').attr("class", "bottom left");
        $('#2_1').attr("class", "top right bottom");
        $('#2_2').attr("class", "top right bottom left");
        $('#2_3').attr("class", "top bottom left");
        $('#3_1').attr("class", "top right");
        $('#3_2').attr("class", "top right left");
        $('#3_3').attr("class", "top left");
        $('#board').attr("class", "");
        
        $('#1_1').empty();
        $('#1_2').empty();
        $('#1_3').empty();
        $('#2_1').empty();
        $('#2_2').empty();
        $('#2_3').empty();
        $('#3_1').empty();
        $('#3_2').empty();
        $('#3_3').empty();
}

//This function prevents the player from adding X's and O's to the board after the game is over.
function makeBoardUnclickable(){
    
        $('#1_1').addClass("notClickable");
        $('#1_2').addClass("notClickable");
        $('#1_3').addClass("notClickable");
        $('#2_1').addClass("notClickable");
        $('#2_2').addClass("notClickable");
        $('#2_3').addClass("notClickable");
        $('#3_1').addClass("notClickable");
        $('#3_2').addClass("notClickable");
        $('#3_3').addClass("notClickable");
}

//This function checks if the player has won. If so, it displays text saying who won, calls fadeText(), and resets the game.
function checkForWin(tableClass){
    
    if($('#board').hasClass("1_1X") && $('#board').hasClass("1_2X") && $('#board').hasClass("1_3X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(1);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("2_1X") && $('#board').hasClass("2_2X") && $('#board').hasClass("2_3X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(2);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("3_1X") && $('#board').hasClass("3_2X") && $('#board').hasClass("3_3X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(3);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("1_1X") && $('#board').hasClass("2_1X") && $('#board').hasClass("3_1X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(4);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("1_2X") && $('#board').hasClass("2_2X") && $('#board').hasClass("3_2X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(5);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("1_3X") && $('#board').hasClass("2_3X") && $('#board').hasClass("3_3X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(6);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("1_1X") && $('#board').hasClass("2_2X") && $('#board').hasClass("3_3X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(7);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("3_1X") && $('#board').hasClass("2_2X") && $('#board').hasClass("1_3X")){
        $('#winner').html("X WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(8);
        makeBoardUnclickable();
        xScore ++;
        $('#xScore').html(xScore);
    }
    else if($('#board').hasClass("1_1O") && $('#board').hasClass("1_2O") && $('#board').hasClass("1_3O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(1);
        makeBoardUnclickable();
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#board').hasClass("2_1O") && $('#board').hasClass("2_2O") && $('#board').hasClass("2_3O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(2);
        makeBoardUnclickable();
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#board').hasClass("3_1O") && $('#board').hasClass("3_2O") && $('#board').hasClass("3_3O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(3);
        makeBoardUnclickable();
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#board').hasClass("1_1O") && $('#board').hasClass("2_1O") && $('#board').hasClass("3_1O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(4);
        makeBoardUnclickable();
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#board').hasClass("1_2O") && $('#board').hasClass("2_2O") && $('#board').hasClass("3_2O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(5);
        makeBoardUnclickable();
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#board').hasClass("1_3O") && $('#board').hasClass("2_3O") && $('#board').hasClass("3_3O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(6);
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#board').hasClass("1_1O") && $('#board').hasClass("2_2O") && $('#board').hasClass("3_3O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(7);
        makeBoardUnclickable();
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#board').hasClass("3_1O") && $('#board').hasClass("2_2O") && $('#board').hasClass("1_3O")){
        $('#winner').html("O WINS");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
        fadeText(8);
        makeBoardUnclickable();
        oScore ++;
        $('#oScore').html(oScore);
    }
    else if($('#1_1').hasClass('notClickable') && $('#1_2').hasClass('notClickable') && $('#1_3').hasClass('notClickable') && $('#2_1').hasClass('notClickable') && $('#2_2').hasClass('notClickable') && $('#2_3').hasClass('notClickable') && $('#3_1').hasClass('notClickable') && $('#3_2').hasClass('notClickable') && $('#3_3').hasClass('notClickable')){
        $('#winner').html("DRAW");
        setTimeout("$('#winner').html('');",2000);
        setTimeout("initialize();", 2000);
    }
}

//This function fades all non-winning text on the board
function fadeText(scenario){
    
    switch(scenario){
        case 1:
            $('#2_1 span').fadeTo(250, 0.4);
            $('#2_2 span').fadeTo(250, 0.4);
            $('#2_3 span').fadeTo(250, 0.4);
            $('#3_1 span').fadeTo(250, 0.4);
            $('#3_2 span').fadeTo(250, 0.4);
            $('#3_3 span').fadeTo(250, 0.4);
            break;
        case 2:
            $('#1_1 span').fadeTo(250, 0.4);
            $('#1_2 span').fadeTo(250, 0.4);
            $('#1_3 span').fadeTo(250, 0.4);
            $('#3_1 span').fadeTo(250, 0.4);
            $('#3_2 span').fadeTo(250, 0.4);
            $('#3_3 span').fadeTo(250, 0.4);
            break;
        case 3:
            $('#1_1 span').fadeTo(250, 0.4);
            $('#1_2 span').fadeTo(250, 0.4);
            $('#1_3 span').fadeTo(250, 0.4);
            $('#2_1 span').fadeTo(250, 0.4);
            $('#2_2 span').fadeTo(250, 0.4);
            $('#2_3 span').fadeTo(250, 0.4);
            break;
        case 4:
            $('#1_2 span').fadeTo(250, 0.4);
            $('#1_3 span').fadeTo(250, 0.4);
            $('#2_2 span').fadeTo(250, 0.4);
            $('#2_3 span').fadeTo(250, 0.4);
            $('#3_2 span').fadeTo(250, 0.4);
            $('#3_3 span').fadeTo(250, 0.4);
            break;
        case 5:
            $('#1_1 span').fadeTo(250, 0.4);
            $('#1_3 span').fadeTo(250, 0.4);
            $('#2_1 span').fadeTo(250, 0.4);
            $('#2_3 span').fadeTo(250, 0.4);
            $('#3_1 span').fadeTo(250, 0.4);
            $('#3_3 span').fadeTo(250, 0.4);
            break;
        case 6:
            $('#1_1 span').fadeTo(250, 0.4);
            $('#1_2 span').fadeTo(250, 0.4);
            $('#2_1 span').fadeTo(250, 0.4);
            $('#2_2 span').fadeTo(250, 0.4);
            $('#3_1 span').fadeTo(250, 0.4);
            $('#3_2 span').fadeTo(250, 0.4);
            break;
        case 7:
            $('#1_2 span').fadeTo(250, 0.4);
            $('#1_3 span').fadeTo(250, 0.4);
            $('#2_1 span').fadeTo(250, 0.4);
            $('#2_3 span').fadeTo(250, 0.4);
            $('#3_1 span').fadeTo(250, 0.4);
            $('#3_2 span').fadeTo(250, 0.4);
            break;
        case 8:
            $('#1_1 span').fadeTo(250, 0.4);
            $('#1_2 span').fadeTo(250, 0.4);
            $('#2_1 span').fadeTo(250, 0.4);
            $('#2_3 span').fadeTo(250, 0.4);
            $('#3_2 span').fadeTo(250, 0.4);
            $('#3_3 span').fadeTo(250, 0.4);
            break;
    }
}