

// 1. Create a signup form and display form data in your web page on submission.



// function togglePassword() {
//     let passwordField = document.getElementById("password");
//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//     } else {
//         passwordField.type = "password";
//     }
// }

// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     document.getElementById("output").innerHTML = `
//         <h3>Signup Details</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Password:</strong> ${password}</p>
//     `;

   
//     document.getElementById("signupForm").reset();
// });




// 2. Suppose in your webpage there is content area in which you have entered your item details, 
// but user can only see some details on first look. When user clicks on “Read more” button, 
// full detail of that particular item will be displayed.


    

// function toggleText() {
//     let moreText = document.getElementById("moreText");
//     let button = document.getElementById("toggleButton");

//     if (moreText.style.display === "none" || moreText.style.display === "") {
//         moreText.style.display = "block";
//         button.innerText = "Read Less";
//     } else {
//         moreText.style.display = "none";
//         button.innerText = "Read More";
//     }
// }




// Q3 Create a form which takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will appear with the values of that row.



var students = [];
var editIndex = null;

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;
    students.push({ name, age, grade });
    updateTable();
    this.reset();
});

function updateTable() {
    let tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
        let row = `<tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    updateTable();
}

function editStudent(index) {
    editIndex = index;
    document.getElementById("editName").value = students[index].name;
    document.getElementById("editAge").value = students[index].age;
    document.getElementById("editGrade").value = students[index].grade;
    document.getElementById("editForm").classList.remove("hidden");
}

function saveEdit() {
    students[editIndex].name = document.getElementById("editName").value;
    students[editIndex].age = document.getElementById("editAge").value;
    students[editIndex].grade = document.getElementById("editGrade").value;
    document.getElementById("editForm").classList.add("hidden");
    updateTable();
}

function cancelEdit() {
    document.getElementById("editForm").classList.add("hidden");
}


