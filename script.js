var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
// console.log(form ,resumeDisplayElement);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeForHtmlG = "\n\n<h1><strong> My Reusem</strong></h1>\n<h3><b>Personal Infomation</b></h3>\n<p><b>Name : </b>".concat(name, "</p>\n<p><b>Email : </b>").concat(email, "</p>\n<p><b>Phone : </b>").concat(phone, "</p>\n\n<h3><b>Education</b></h3>\n<p>").concat(education, "</p>\n\n\n<h3><b>Experience</b></h3>\n<p>").concat(experience, "</p>\n\n\n<h3><b>Skills</b></h3>\n<p>").concat(skills, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeForHtmlG;
    }
    else {
        console.error('Reuseme Disply Missing .');
    }
});
