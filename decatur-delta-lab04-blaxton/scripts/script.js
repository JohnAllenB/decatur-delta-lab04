function manipulateName() {
    var name = document.getElementById('nameInput').value;
    var manipulatedName = customManipulation(name);
    var outputElement = document.getElementById('output');
    outputElement.textContent = "Your new name is: " + manipulatedName;
  }
  
  function customManipulation(name) {
    // Example: Reversing the name
    return name.split('').reverse().join('');
  }
  
function countLettersInName() {
    var name = document.getElementById('nameInput').value;
    var letterCount = name.replace(/\s/g, '').length;
    var outputElement = document.getElementById('output');
    outputElement.textContent = "Your name has " + letterCount + " letters.";
  }