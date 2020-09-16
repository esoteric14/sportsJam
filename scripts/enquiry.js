function enquire_function() {
  event.preventDefault();
  var email = document.getElementById("frm-email").value;
  var name = document.getElementById("frm-name").value;
  // var detail = { email: email, name: name };
  // console.log(detail);

  var settings = {
    url: "https://pyxy.herokuapp.com/forms/api/v1/Inquiry/submit",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": ["application/json", "text/plain"],
      Authorization: "5f54fb420275631f28aa698b",
    },
    data:
      `{\n\t\"name\": \"` +
      name +
      `\",\n\t\"contact\": \"` +
      email +
      `\",\n\t\"message\": \"test 123\"\n}`,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}