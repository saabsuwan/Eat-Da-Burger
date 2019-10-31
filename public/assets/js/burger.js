// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-cook").on("click", function(event) {
    var id = $(this).data("id");
    var newcook = $(this).data("newcook");

    var newcookState = {
      cooky: newcook
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newcookState
    }).then(
      function() {
        console.log("changed cook to", newcook);
        // Reload the page to get the updated list
        loburgerion.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      cooky: $("[name=cook]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        loburgerion.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        loburgerion.reload();
      }
    );
  });
});
