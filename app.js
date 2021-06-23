
const viewButton = document.getElementById("viewBooks");
const addButton = document.getElementById("addButton")
const displayText = document.getElementById("display");
const editSection = document.getElementById("editSection");

let unreadInput = document.createElement("input");
let readInput = document.createElement("input");
let pageInput = document.createElement("input");
let submitButton = document.createElement("button");

editSection.appendChild(submitButton);
submitButton.innerHTML = "Add Book";
submitButton.style.order = 3;



let myLibrary = [];


// Constructor for Book Objects
function Book (title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

    this.info = function() {

        let output = this.title + " by " + this.author + ", " + this.numPages + " pages, " + this.read;
        return output;
        
    }


}

// Function to add book to library
function addBookToLibrary(title, author, pages, read) {

    // Add book object to the end of the array
    myLibrary.push(new Book(title, author, pages, read));
    
}

function display(item){

    displayText.innerText += item.info() + "\n";
    console.log(item.title);

}

// Bring up a form when the add book button is pressed
function createForm(){
    
    let form = document.createElement("form");
    editSection.appendChild(form);
    form.classList.add("form");
    
    //Begin
    let label1 = document.createElement("label");
    form.appendChild(label1);

    label1.setAttribute("for", "title"); //* update id
    label1.innerHTML = "Book Title:"

    let titleInput = document.createElement("input");
    form.appendChild(titleInput);
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title"); ///* update id
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("value", "");
    //End


    //Begin
    let label2 = document.createElement("label");
    form.appendChild(label2);

    label2.setAttribute("for", "author");
    label2.innerHTML = "Book Author:"

    let authorInput = document.createElement("input");
    form.appendChild(authorInput);
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("value", "");
    //End


    //Begin
    let label3 = document.createElement("label");
    form.appendChild(label3);

    label3.setAttribute("for", "pages");
    label3.innerHTML = "Number of Pages:"

    
    form.appendChild(pageInput);
    pageInput.setAttribute("type", "text");
    pageInput.setAttribute("id", "pages");
    pageInput.setAttribute("name", "pages");
    pageInput.setAttribute("value", "");
    //End


    //Begin
    
    form.appendChild(readInput);
    readInput.setAttribute("type", "radio");
    readInput.setAttribute("id", "read");
    readInput.setAttribute("name", "read");
    readInput.setAttribute("value", "Read");
    
    let readOption = document.createElement("label");
    form.appendChild(readOption);

    readOption.setAttribute("for", "read");
    readOption.innerHTML = "Read";
    //End


    //Begin
   

    form.appendChild(unreadInput);
    unreadInput.setAttribute("type", "radio");
    unreadInput.setAttribute("id", "unread");
    unreadInput.setAttribute("name", "unread");
    unreadInput.setAttribute("value", "Unread");
    
    let unreadOption = document.createElement("label");
    form.appendChild(unreadOption);

    unreadOption.setAttribute("for", "unread");
    unreadOption.innerHTML = "Not Yet Read";
    //End


    //Begin
    submitButton.addEventListener('click', function() { 
        addBookToLibrary((document.getElementById("title").value), 
        document.getElementById("author").value, 
        document.getElementById("pages").value, 
        document.getElementById("read").value); 
        })
    //End

}


//submitButton.addEventListener('click', function() { addBookToLibrary((document.getElementById("kkk")), "2", 3, "read"); console.log("LLL") })

addButton.addEventListener('click', function () { createForm() });

viewButton.addEventListener('click', function() { myLibrary.forEach(display); })

// call the addtolibrary function to add a book to the library
addBookToLibrary("The Hail Mary", "Andy Weir", 497, "not read yet");
addBookToLibrary("The House in the Cerulean Sea", "TJ Klune", 393, "not read yet");
addBookToLibrary("A Storm of Swords", "George R.R. Martin", 1008, "not read yet");

//myLibrary.forEach(display);

//console.log(myLibrary[0].info());


{/* 
<form action="/action_page.php">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
</form> 
*/}


// Use this to get the value contained in the input field when the sumbit button is pressed
// document.getElementById('textbox_id').value