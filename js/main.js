$(function() {

    

    var firstOperand = "";
    var secondOperand = "";
    var operator = "";

    function reset () {
        firstOperand = "";
        secondOperand = "";
        operator = "";
    }


    function calculate () {
        var firstOperNum = parseInt(firstOperand);
        var secondOperNum = parseInt(secondOperand);
        switch(operator) {

            case "&divide;":
                display("" + secondOperNum/firstOperNum);
                reset();
                break;
            case "x":
                display("" + firstOperNum*secondOperNum);
                reset();
                break;
            case "-":
                display("" + (firstOperNum - secondOperNum));
                reset();
                break;
            case "+":
                display("" + (firstOperNum + secondOperNum));
                reset();
                break;
            default:
                break;
        }
    }

    function display (string) {
        if(string === "clear") {
            $('#screen').text("");    
        } else {
            $('#screen').text(string);
        }
    }
    
    function operatorClick(text) {
        
        switch(text) {
                case "C":
                    reset();
                    display("clear");
                    break;
                case "=":
                    if (firstOperand !== "" && secondOperand !== "" && operator !== "") {
                        calculate();
                    }
                    break;
                default:
                    operator += text;
                    break;
                }
    }
    
    function numberClick (text) {

        if(operator.length === 0) {
            firstOperand += text;
            display(firstOperand);
        } else {
            secondOperand += text;
            display(secondOperand);
        } 
    }
    

    $('.operator').click(function() {
        operatorClick($(this).text());
        console.log($(this).text());
    });

    $('span:not(.operator)').click(function() {
        numberClick($(this).text());
        console.log($(this).text());
    });

});