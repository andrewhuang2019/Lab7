

function change_paragraph(){

    var border_R = document.getElementById('border_R').value;
    var border_G = document.getElementById('border_G').value;
    var border_B = document.getElementById('border_B').value;
    var borderwidth = document.getElementById('border_Width').value;
    var background_R = document.getElementById('background_R').value;
    var background_G = document.getElementById('background_G').value;
    var background_B = document.getElementById('background_B').value;
    
    var paragraph = document.getElementById('change');
    paragraph.style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`;
    paragraph.style.borderWidth = borderwidth;
    paragraph.style.backgroundColor = `rgb(${background_R}, ${background_G}, ${background_B})`;

}

function check_password(){
    var password1 = document.getElementById('password_one').value;
    var password2 = document.getElementById('password_two').value;

    if (password1.length < 8){
        alert("First password length is less than 8 characters.");
    } else if (password2.length < 8){
        alert("Second password length is less than 8 characters.");
    } else {
        if (password1 == password2){
            alert("Passwords match and are valid!");
        } else {
            alert("Passwords do not match");
        }
    }
}