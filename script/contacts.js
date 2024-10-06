function validate() {
    // document.getElementById('contactNumber')
    //  |           |               |
    // Refers to  Refers to the   Refers to ID
    // webpage     getting the
    //           element by ID

    let email = document.getElementById('EmailAddress')
	let name = document.getElementById('Name')
	let Subject = document.getElementById('Subject')
	let subjectTextarea = document.getElementById('subjectTextarea')


    console.log(email.value)
    // Checks if length of the input does not equal to 0
    if (email.value.length != 0) {
        email.classList = "form-control";
        
        document.getElementById("contactNameValidation").classList= "d-none text-danger";

    } else {

        email.classList = "form-control is-invalid";

        document.getElementById('contactNameValidation').classList = "text-danger";
    }
	// Checks if length of the input does not equal to 0
    if (name.value.length != 0) {
        name.classList = "form-control";
        
        document.getElementById("contactNameValidation").classList= "d-none text-danger";

    } else {

        name.classList = "form-control is-invalid";

        document.getElementById('contactNameValidation').classList = "text-danger";
    }
	// Checks if length of the input does not equal to 0
    if (Subject.value.length != 0) {
        Subject.classList = "form-control";
        
        document.getElementById("contactNameValidation").classList= "d-none text-danger";

    } else {

        Subject.classList = "form-control is-invalid";

        document.getElementById('contactNameValidation').classList = "text-danger";
    }
	// Checks if length of the input does not equal to 0
    if (subjectTextarea.value.length != 0) {
        subjectTextarea.classList = "form-control";
        
        document.getElementById("contactNameValidation").classList= "d-none text-danger";

    } else {

        subjectTextarea.classList = "form-control is-invalid";

        document.getElementById('contactNameValidation').classList = "text-danger";
    }
}
