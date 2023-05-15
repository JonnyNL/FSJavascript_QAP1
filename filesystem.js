/* Author: Jonathan Ivany */

/* The File System (fs) is a core module in javascript that allows you to interact with the file system on your computer.*/
/* It allows you to write, read, delete, and update files.*/

const fs = require("fs"); // To use the filesystem module we must first import it since this is a core module there is no installation needed

/*Writing a text document*/

const fileName = "holygrail.txt"; // Give our text document a name
const fileContent = "Monty Python is great!"; // Give our text document some accurate information

// Use file system method writeFile() to create the document
fs.writeFile(fileName, fileContent, (error) => {
  // Use an arrow function to catch the error if there is one otherwise show success
  if (error) throw error;
  console.log("The Holy Grail has been created");

  // The purpose of this timer is to allow the system to go through each one of these steps in order
  setTimeout(() => {
    /* Reading a text document */

    const filePath = "holygrail.txt"; // Specify the path to the file you're trying to interact with

    // Use file system method readFile() to read the document
    fs.readFile(filePath, "utf8", (error, data) => {
      // utf8 is a popular encoding format for text documents
      if (error) {
        console.error(error);
        return;
      }
      console.log(data);

      setTimeout(() => {
        /* Updating a text document */

        // With the file system we can either update or overwrite the text document
        // To overwrite it you would use the writeFile() method as shown previously

        const newContent = "Tis just a "; // We will overwrite the file with this new content

        fs.writeFile(fileName, newContent, (error) => {
          if (error) throw error;
          console.log("The Holy Grail has been overwritten");

          setTimeout(() => {
            const addContent = "flesh wound!";
            // Use file system method appendFile() to add to the document
            fs.appendFile(fileName, addContent, (error) => {
              if (error) throw error;
              console.log("The Holy Grail has been updated");

              setTimeout(() => {
                // Read the file again to show the updated file
                fs.readFile(filePath, "utf8", (error, data) => {
                  if (error) {
                    console.error(error);
                    return;
                  }
                  console.log(data);

                  // Set timer for 1 second before deleting the file
                  setTimeout(() => {
                    /* Deleting the text document */

                    // Use the file system method unlink() to delete the file.
                    fs.unlink(fileName, (error) => {
                      if (error) throw error;
                      console.log("The Holy Grail has been deleted!");
                    });
                  }, 1000);
                });
              }, 1000);
            });
          }, 1000);
        });
      }, 1000);
    });
  }, 1000);
});
