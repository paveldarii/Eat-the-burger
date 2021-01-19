$("li .btn").on("click", (response) => {
  $.ajax({
    url: "/burgers/api",
    method: "PUT",
    data: {
      burgerId: parseInt(
        response.target.parentNode.attributes.idvalue.nodeValue
      ),
    },
  }).then(() => {
    console.log("Updated burger");
    location.reload();
  });
});

$("#add-burger-btn").on("click", (data) => {
  $.ajax({
    url: "/burgers/api",
    method: "POST",
    data: { burgerName: $("#burger-name").val().trim() },
  }).then(() => {
    console.log("Added new burger");
    location.reload();
  });
});
