document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      alert("Llene todos los campos");
    } else {
      const userData = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      console.log(userData);
      loginForm.reset();
    }
  });
});
