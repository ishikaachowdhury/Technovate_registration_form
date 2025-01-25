
// Hackamania registration link
document.getElementById('registration-link').addEventListener('click', function (event) {
  const confirmRegistration = confirm("You are being redirected to the Hackamania registration form. Do you want to continue?");
  if (!confirmRegistration) {
    // Prevent the default action if the user cancels
    event.preventDefault();
  }
});

// Dark Syntax registration link
document.getElementById('dark-syntax-link').addEventListener('click', function (event) {
  const confirmRegistration = confirm("You are being redirected to the Dark Syntax registration form. Do you want to continue?");
  if (!confirmRegistration) {
    // Prevent the default action if the user cancels
    event.preventDefault();
  }
});

// Can You C? registration link
document.getElementById('can-you-c-link').addEventListener('click', function (event) {
  const confirmRegistration = confirm("You are being redirected to the Can You C? registration form. Do you want to continue?");
  if (!confirmRegistration) {
    // Prevent the default action if the user cancels
    event.preventDefault();
  }
});
