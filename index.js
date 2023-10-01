// Wait for the DOM (HTML content) to be fully loaded before executing any JavaScript code
document.addEventListener("DOMContentLoaded", function () {

  // Get references to the input element, input button, and unordered list element in the HTML document
  const inputEl = document.getElementById("input-el"); // input element reference
  const inputBtn = document.getElementById("input-btn"); // input button reference
  const ulEl = document.getElementById("ul-el"); // unordered list element reference

  // Initialize an array called myLeads
  let myLeads = [];

  // Add event listener to input button
  inputBtn.addEventListener("click", function () {
    // Add the value of the input element to the myLeads array using the push() method
    myLeads.push(inputEl.value);
    inputEl.value = ""; // Clear the input element, when the input button is clicked on.
    renderLeads();
  });

  // Render the leads in the unordered list element
  function renderLeads() {
    let listItems = "";
    // Loop through the myLeads array and append each lead URL to the unordered list element using the innerHTML property
    for (let i = 0; i < myLeads.length; i++) {
      // added click event to each list item, so that when clicked, it will open the URL in a new tab

      // used Template Strings to Increase Simplicity and Minimizing Confusions.
      listItems += `
      <li>
          <a target = "_blank" href = '${myLeads[i]}'>
          ${myLeads[i]}
          </a>
      </li>
      `
    };
    ulEl.innerHTML = listItems;

  }

  deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
  });

  inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
  //if user clicks this button then it will delete what they click on after thats located within the input el field
  deleteOneAtATime.addEventListener("click", function () {
    myLeads.pop(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
  //if you want to delete a specific element of the array, you need to search its id
  //instead of justing pushing the value, push an object, containing a value and an unique id
  //that way, you can search the id of the item and delete it

  shiftBtn.addEventListener("click", function () {
    myLeads.shift(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });


});