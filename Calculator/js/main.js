//Author:Mithun S
//Calculator operation

var value = "";

var reg = /[[0-9]*[*+-/][0-9]*]*/;

//To display the elements in input box and append values
function display_values(val) {
    document.getElementById('elements').value += val;
    value += val;
}


//Function which converts string to array and then performs the operations
function display() {


    var number = /[0-9'.']/;  //regular expression to match with the digits
    var append_value = "";
    var input_array = new Array();
    var numbers_array = new Array();
    var first_num;
    var second_num;
    var operation_results;
    input_array = Array.from(value);
    //appends the values and creates the array
    for (var i = 0; i < input_array.length; i++) {

        if (input_array[i].match(number)) {
            append_value += input_array[i];

        }

        else {
            if (append_value == '' && input_array[i] == '-')     // for negative no.s in starting
            {
                append_value = '-';
            }
            else {

                numbers_array.push(append_value);
                append_value = '';
                numbers_array.push(input_array[i]);
            }
        }

    }
    numbers_array.push(append_value);//to push last element


    //performs the opertaions

    while (numbers_array.length > 1) {


        first_num = numbers_array.shift();
        opera = numbers_array.shift();
        second_num = numbers_array.shift();


        first_num = parseFloat(first_num);
        second_num = parseFloat(second_num);

        switch (opera) {
            case '+': operation_results = first_num + second_num;
                operation_results.toString();
                numbers_array.unshift(operation_results);
                break;

            case '-': operation_results = first_num - second_num;
                operation_results.toString();
                numbers_array.unshift(operation_results);
                break;

            case '*': operation_results = first_num * second_num;
                operation_results.toString();
                numbers_array.unshift(operation_results);
                break;

            case '/':
                if (second_num == 0) {
                    alert('Dude please give a valid input')
                }

                operation_results = first_num / second_num;
                operation_results.toString();
                numbers_array.unshift(operation_results);
                break;

            case '%':
                if (second_num == 0) {
                    alert('Dude please give a valid input')
                }

                operation_results = first_num % second_num;
                operation_results.toString();
                numbers_array.unshift(operation_results);
                break;
        }


    }
    document.getElementById('results').value = numbers_array;

}
