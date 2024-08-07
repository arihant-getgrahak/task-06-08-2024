const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  alert(alertMessage);
  form.reset();
});
