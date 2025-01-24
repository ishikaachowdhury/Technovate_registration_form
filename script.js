// JavaScript for the registration button
document.getElementById('registration-link').addEventListener('click', function (event) {
  const confirmRegistration = confirm("You are being redirected to the Hackamania registration form. Do you want to continue?");
  if (!confirmRegistration) {
    // Prevent the default action if the user cancels
    event.preventDefault();
  }
});
