function validate() {
    // document.getElementById('contactNumber')
    //  |           |               |
    // Refers to  Refers to the   Refers to ID
    // webpage     getting the
    //           element by ID

    let num = document.getElementById('contactNumber')


    console.log(num.value)
    // Checks if length of the input does not equal to 0
    if (num.value.length != 0) {
        num.classList = "form-control";
        
        document.getElementById("contactNumValidation").classList= "d-none text-danger";

    } else {

        num.classList = "form-control is-invalid";

        document.getElementById('contactNumValidation').classList = "text-danger";
    }
}