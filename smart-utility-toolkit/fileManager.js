// fileManager.js

const fs = require("fs");

const fileName = "sample.txt";

// --------------------
// 1. CREATE FILE
// --------------------

fs.writeFile(fileName, "This is my Smart Utility Toolkit file.", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully.");

    // --------------------
    // 2. READ FILE
    // --------------------

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File content:");
        console.log(data);

        // --------------------
        // 3. UPDATE FILE
        // --------------------

        fs.appendFile(
            fileName,
            "\nThis line was added during the update operation.",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err);
                    return;
                }

                console.log("File updated successfully.");

                // Updated file ko dobara read karna
                fs.readFile(fileName, "utf8", (err, updatedData) => {

                    if (err) {
                        console.log("Error reading updated file:", err);
                        return;
                    }

                    console.log("Updated file content:");
                    console.log(updatedData);

                    // --------------------
                    // 4. DELETE FILE
                    // --------------------

                    fs.unlink(fileName, (err) => {

                        if (err) {
                            console.log("Error deleting file:", err);
                            return;
                        }

                        console.log("File deleted successfully.");
                    });
                });
            }
        );
    });
});