

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDialogElement;
// console.log(form ,resumeDisplayElement);


form.addEventListener("submit",(event : Event) =>{
event.preventDefault();

const name = (document.getElementById("name") as HTMLInputElement).value
const email = (document.getElementById("email") as HTMLInputElement).value
const phone = (document.getElementById("phone") as HTMLInputElement).value
const education = (document.getElementById("education") as HTMLInputElement).value
const experience = (document.getElementById("experience") as HTMLInputElement).value
const skills = (document.getElementById("skills") as HTMLInputElement).value

const resumeForHtmlG =`

<h1 style.border-blak><strong> My Reusem</strong></h1>
<h3><b>Personal Infomation</b></h3>
<p className="abc"><b>Name : </b>${name}</p>
<p><b>Email : </b>${email}</p>
<p><b>Phone : </b>${phone}</p>

<h3><b>Education</b></h3>
<p>${education}</p>


<h3><b>Experience</b></h3>
<p>${experience}</p>


<h3><b>Skills</b></h3>
<p>${skills}</p>
`;

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeForHtmlG;
   
}
else{
    console.error('Reuseme Disply Missing .');
}



})