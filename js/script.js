var iconImages = document.getElementsByClassName('icon-contact');
var formLabels = document.getElementsByClassName('lbl');
var formInputs = document.getElementsByClassName('contact-input');

var labelsForCompany = [
    'Your Company name',
    'Your Company email',
    'Your Company website',
    'Tell us more about you and your team'
];

var labelsForNotCompany = [
    'Your name',
    'Your email',
    'Your website',
    'Upload your resume (.pdf)'
];



function smoothScroll() {
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
}



function addSelectedClass(image) {
    image.classList.add("selected");
}



function changeLabels(id) {

    var lastInput = formInputs[3];

    if (id == 0) {
        for (var i = 0; i < formLabels.length; i++) {
            formLabels[i].innerText = labelsForCompany[i];
            lastInput.classList.add('textfield');
            lastInput.type = 'text';
            lastInput.name = "info";
            lastInput.accept = "";
        }
    } else {
        for (var i = 0; i < formLabels.length; i++) {
            formLabels[i].innerText = labelsForNotCompany[i];
        }
        lastInput.classList.remove('textfield');
        lastInput.type = 'file';
        lastInput.name = "resume";
        lastInput.accept = ".pdf";
    }
}



function removeSelectedClass(id) {
    for (var i = 0; i < iconImages.length; i++) {

        var currentElementId = iconImages[i].getAttribute('id');

        if (currentElementId != id) {
            iconImages[i].classList.remove("selected");
        }
    }
}



function changeForm(event) {
    event.preventDefault();
    var element = this;
    var elementId = element.getAttribute('id');

    addSelectedClass(element);
    removeSelectedClass(elementId);
    changeLabels(elementId);
}



// Add event listener to contact icons
function addListenerToImages() {

    for (var i = 0; i < iconImages.length; i++) {
        iconImages[i].addEventListener("click", changeForm);
    }
}


window.onload = function() {

    smoothScroll();
    addListenerToImages();

}
