// Get a reference to the create task link
const createTaskLink = document.getElementById("create-task-link");

// Add a click event listener to the link
createTaskLink.addEventListener("click", function (event) {
    // Prevent the default behavior of the link (prevents navigation)
    event.preventDefault();

    // Remove any existing forms before appending a new one
    const existingForm = document.querySelector('#task-container form');
    if (existingForm) {
        existingForm.remove();
    }

    const form = document.createElement("form");
    form.className = "p-3 bg-light rounded"; // Add Bootstrap classes for padding, background color, and rounded corners
    form.style.border = "2px solid black"; // Add border
    form.style.position = "fixed"; // Fixed position
    form.style.top = "250px"; // Position from the top
    form.style.left = "530px"; // Position from the left
    form.style.height = "400px"; // Fixed height
    form.style.width = "800px"; // Fixed width
    form.style.visibility="visible";
    form.innerHTML = `
    <div class="form-group">
        <label for="tag">Tag:</label>
        <input type="text" class="form-control" id="tag" name="tag" placeholder="Enter tag">
    </div>
    <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" id="title" name="title" placeholder="Enter title">
    </div>
    <div class="form-group">
        <label for="description">Description:</label>
        <textarea class="form-control" id="description" name="description" rows="3" placeholder="Enter description"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
`;

    document.getElementById("task-container").appendChild(form);

    // Optional: Focus on the first input field for better user experience
    document.getElementById("tag").focus();
});
