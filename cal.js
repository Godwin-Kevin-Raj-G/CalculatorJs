//Entering the value And displaying the value

function send(i) {
    x = document.getElementById("display");
    switch (i) {
        case 1:
            x.value += 1 // x="1" x=x+"1">"11"
            break;

        case 2:
            x.value += 2
            break;

        case 3:
            x.value += 3
            break;

        case 4:
            x.value += 4
            break;

        case 5:
            x.value += 5
            break;

        case 6:
            x.value += 6
            break;

        case 7:
            x.value += 7
            break;

        case 8:
            x.value += 8
            break;

        case 9:
            x.value += 9
            break;

        case 0:
            x.value += 0
            break;



            // OPERATORS


        case "+":
            x.value += "+"
            break;
        case "-":
            x.value += "-"
            break;
        case "*":
            x.value += "*"
            break;
        case "/":
            x.value += "/"
            break;
        case "AC":
            x.value = ""
            break;

        case ".":
            x.value += "."
            break;



            // calculating

        case "=":
            result = eval(x.value) // eval () find the operation in value of string
            x.value = result;
            break;

    }

}