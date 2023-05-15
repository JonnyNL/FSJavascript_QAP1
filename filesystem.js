/* AUTHOR: JONATHAN IVANY */

/* The File System (fs) is a core module in javascript that allows you to interact with the file system on your computer.*/
/* It allows you to write, read, delete, and update files.*/

const fs = require("fs"); // To use the filesystem module we must first load it since this is a core module there is no installation needed

///////////////////////////
/*Writing a text document*/

const fileName = "holygrail.txt"; // Give our text document a name
const fileContent = "Monty Python is great!"; // Give our text document some accurate information

// Use file system method writeFile() to asynchronously or writeFileSync() to synchronously create the document
fs.writeFileSync(fileName, fileContent);
console.log("The Holy Grail has been created");

/////////////////////////////
/* Reading a text document */

const filePath = "holygrail.txt"; // Specify the path to the file you're trying to interact with

// Use file system method readFile() to read the document
const data = fs.readFileSync(filePath, "utf8"); // utf8 is a popular encoding format for text documents
console.log(data);

//////////////////////////////
/* Updating a text document */

// With the file system we can either update or overwrite the text document
// To overwrite it you would use the writeFile() method as shown previously

const newContent = "Tis just a "; // We will overwrite the file with this new content

fs.writeFileSync(fileName, newContent);
console.log("The Holy Grail has been overwritten");

const addContent = "flesh wound!";
// Use file system method appendFile() to asynchronously or appendFileSync to add to the document
fs.appendFileSync(fileName, addContent);
console.log("The Holy Grail has been updated");

// Read the file again to show the updated file
const updatedData = fs.readFileSync(filePath, "utf8");
console.log(updatedData);

////////////////////////////////
/* Deleting the text document */

// Use the file system method unlink() to asynchronously or unlinkSync() to synchronously delete the file.
fs.unlinkSync(fileName);
console.log("The Holy Grail has been deleted!");
