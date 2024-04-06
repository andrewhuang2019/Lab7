

function change_paragraph(){

    var border_R = document.getElementById('border_R').value;
    var border_G = document.getElementById('border_G').value;
    var border_B = document.getElementById('border_B').value;
    var border_Width = document.getElementById('border_Width').value;
    var background_R = document.getElementById('background_R').value;
    var background_G = document.getElementById('background_G').value;
    var background_B = document.getElementById('background_B').value;
    
    var paragraph = document.getElementById('change');
    paragraph.style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`;
    paragraph.style.borderWidth = border_Width;
    paragraph.style.backgroundColor = `rgb(${background_R}, ${background_G}, ${background_B})`;

}

function check_password(){
    var password1 = document.getElementById('password_one').value;
    var password2 = document.getElementById('password_two').value;

    if (password1.length < 8){
        document.write("your password sucks!");
    } else if (password2.length < 8){
        document.write("try again bozo");
    } else {
        if (password1 == password2){
            document.write("good password");
        } else {
            document.write("bad password");
        }
    }
}
/*
var borderR = document.getElementById('borderR').value;
var borderG = document.getElementById('borderG').value;
var borderB = document.getElementById('borderB').value;
var borderWidth = document.getElementById('borderWidth').value;
var backgroundR = document.getElementById('backgroundR').value;
var backgroundG = document.getElementById('backgroundG').value;
var backgroundB = document.getElementById('backgroundB').value;
var paragraph = document.getElementById('change');
paragraph.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
paragraph.style.borderWidth = border_Width
*/