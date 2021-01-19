$("li .btn").on("click", (event) => {
  let burgerId = parseInt(event.target.offsetParent.attributes[1].nodeValue);
  $.ajax({
    url: "/burgers/api",
    method: "PUT",
    data: {
      burgerId: burgerId,
    },
  }).then(() => {
    console.log("Updated burger");
    location.reload();
  });
});

$("#add-burger-btn").on("click", () => {
  let burgName = $("#burger-name").val().trim();
  if (burgName == "") {
    return;
  }
  $.ajax({
    url: "/burgers/api",
    method: "POST",
    data: { burgerName: burgName },
  }).then(() => {
    console.log("Added new burger");
    location.reload();
  });
});
