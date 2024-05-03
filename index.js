// Question ____________ 85
function findCodePosition(inputString) {
    // Convert the input string to lowercase for case-insensitive search
    const lowerCaseString = inputString.toLowerCase();
    // Find the position of the word "code" in the string
    const position = lowerCaseString.indexOf("code");
    return position;
}
// Example usage:
const sampleString = "Let's code some TypeScript code!";
const codePosition = findCodePosition(sampleString);
if (codePosition !== -1) {
    console.log(`The word "code" starts at position ${codePosition}.`);
}
else {
    console.log(`The word "code" is not found in the string.`);
}
;
// Question __________ 86
function checkForJavaScript(inputString) {
    // Convert the input string to lowercase for case-insensitive search
    const lowerCaseString = inputString.toLowerCase();
    // Check if the lowercase string includes the word "javascript"
    const containsJavaScript = lowerCaseString.includes("javascript");
    return containsJavaScript;
}
// Example usage:
const SampleString = "Let's learn JavaScript together!";
const isJavaScriptPresent = checkForJavaScript(SampleString);
if (isJavaScriptPresent) {
    console.log("The word 'JavaScript' is present in the string.");
}
else {
    console.log("The word 'JavaScript' is not present in the string.");
}
;
// Question _____________ 87
function extractFirstTenCharacters(inputString) {
    // Use .substring() to extract the first 10 characters
    const firstTenChars = inputString.substring(0, 10);
    return firstTenChars;
}
// Example usage:
const normalString = "This is a sample string for demonstration.";
const firstTenChars = extractFirstTenCharacters(normalString);
console.log(`First 10 characters: ${firstTenChars}`);
export {};
