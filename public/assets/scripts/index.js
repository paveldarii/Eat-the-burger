$("li .btn").on("click", (response) => {
  $.ajax({
    url: "/burgers/api",
    method: "PUT",
    data: {
      burgerId: parseInt(
        response.target.parentNode.attributes.idvalue.nodeValue
      ),
    },
  }).then((response) => {});
});

$("#add-burger-btn").on("click", (data) => {
  $.ajax({
    url: "/burgers/api",
    method: "POST",
    data: { burgerName: $("#burger-name").val() },
  }).then((response) => {});
});
