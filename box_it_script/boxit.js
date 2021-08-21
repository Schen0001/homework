/* 
I had a ton of help from one of the TAs (Ondrej) and although the way done is different from the instructions, 
the desired results are still the same!
*/


function createBorders(maxLength, borderLocation) {
    let row = '';

    if (borderLocation === "topBorder") {
        row = row + '\u250c';
    } else if (borderLocation === "middleBorder") {
        row = row + '\u2520';
    } else if (borderLocation === "bottomBorder") {
        row = row + '\u2514';
    }

    for (let i = 0; i < maxLength; i++) {
        row = row + '\u2500'; // this horizontal line should have the same length as length of word.
    }
    // Created the corners and sides for both sides now. Both corners and sides should show up now,
    // Horizontal line will show if array is inputted in function argument. namesInArray.
    if (borderLocation === "topBorder") {
        row = row + '\u2510';
    } else if (borderLocation === "middleBorder") {
        row = row + '\u2524';
    } else if (borderLocation === "bottomBorder") {
        row = row + '\u2518';
    }
    return row;
}

function boxIt(namesInArray) {
    const result = [];
    let longestNameLength = 0;

    for (let i = 0; i < namesInArray.length; i++) {
        if (namesInArray[i].length > longestNameLength) {
            longestNameLength = namesInArray[i].length;
        }
    }

    result.push(createBorders(longestNameLength, "topBorder"));

    // Here we would create a for loop that calculates the difference of letters from the longest string to the shortest,
    // then we would replace that empty space with spaces so the box will look filled in and organized.
    for (let i = 0; i < namesInArray.length; i++) {
        let numberOfSpacesRequired = longestNameLength - namesInArray[i].length;
        let rightSpace = '';

        for (let i = 0; i < numberOfSpacesRequired; i++) {
            rightSpace = rightSpace + ' '; // Here it will fill the difference of space with spaces.
        }

        // Now for the console log names or whatever we want to show including the rightSpace.
        result.push(`|${namesInArray[i]}${rightSpace}|`);
        // Here, Ondrej explained to me that "- 1" is needed here so that the middleBorder does not repeat down on to the last row.
        if (i < namesInArray.length - 1) {
        // Basically showed everything perfect except theres an extra empty row space without the "- 1".
            result.push(createBorders(longestNameLength, "middleBorder"));
        }
    }

    result.push(createBorders(longestNameLength, "bottomBorder"));

    for (let i = 0; i < result.length; i++) {
        let row = result[i];
        console.log(row);
    }
};


// boxIt(process.argv.slice(2)); This is the main one to use, but I'll leave the one below on because they are legendary.
boxIt(["John Wick", "James Bond", "Agent 47"]);