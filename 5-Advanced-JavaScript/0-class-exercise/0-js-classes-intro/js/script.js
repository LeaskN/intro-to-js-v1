// The Office (Themed)

//     Dundler Mifflen has created a new system where employees need to clock in.

//     Write a script that stores a list of those who are clocked in - utilize html input fields to allow employees to input 
//     new user information one user at a time.

//     - Create a sign-in sheet - with HTML, CSS & JSyour HTML.
//     - Create classes (think of them as blueprints) - in your JS.
//     - We want to see the the people who have signed up - ie. populate a column with the new people on your document.

// The process:

//     The user should be able to input their name, employee title, id number etc. After the've filled out all their information, this should trigger the creation of 
//     a new Employee Object. You should use an object to hold the information about the sign-in sheet, including those users who are signed in.

//     Create a function that looks at that sign-in object and displays all those employees...

const inputName = document.body.querySelector("#name-div input");
const nameSubmit = document.body.querySelector("#sign-in-form button");

nameSubmit.addEventListener("click", handleClick);

function handleClick(){
    console.log(inputName.value);
}