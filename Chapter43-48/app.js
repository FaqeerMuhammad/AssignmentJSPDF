



// 1. Show an alert box on click on a link.



// function showalert(){


// alert("Hello World")


// }


// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.


// function thnxMsg(){

// alert("Thanks for purchasing mobile form us")


//  }



// 3. Display 10 student records in table and each row should contain a delete button. 
// If you click on a button to delete a record, entire row should be deleted.



// var students = [
//     { id: 1, name: "Ali", class: "10th" },
//     { id: 2, name: "Sara", class: "9th" },
//     { id: 3, name: "Ahmed", class: "8th" },
//     { id: 4, name: "Zainab", class: "7th" },
//     { id: 5, name: "Hassan", class: "10th" },
//     { id: 6, name: "Fatima", class: "6th" },
//     { id: 7, name: "Umer", class: "9th" },
//     { id: 8, name: "Aisha", class: "5th" },
//     { id: 9, name: "Bilal", class: "8th" },
//     { id: 10, name: "Hina", class: "7th" }
// ];

// var tableBody = document.querySelector("#studentTable tbody");

// function loadStudents() {
//     students.forEach(student => {
//         var row = document.createElement("tr");
//         row.innerHTML = ` 
//             <td>${student.id}</td>
//             <td>${student.name}</td>
//             <td>${student.class}</td>
//             <td><button onclick="deleteRow(this)">Delete</button></td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

// function deleteRow(button) {
//     let row = button.parentNode.parentNode;
//     row.remove(); 
// }


// loadStudents();




// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.



// function changeImage() {
//     document.getElementById("hoverImage").src = "./images/image2.jpg"; 
// }

// function resetImage() {
//     document.getElementById("hoverImage").src = "./images/image1.jpg"; 
// }






// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. 
// And show updated counter value in browser.




var count = 0;

function increaseCounter() {
    count++;
    document.getElementById("counter").innerText = count;
}

function decreaseCounter() {
    count--;
    document.getElementById("counter").innerText = count;
}













