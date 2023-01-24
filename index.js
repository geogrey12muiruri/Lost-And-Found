document.getElementById("signup-link").addEventListener("click", function(e) {
    e.preventDefault();
    $("#signupModal").modal('show');
});
$(document).ready(function(){
    $("#login-link").on("click", function(e) {
      e.preventDefault();
      $("#loginModal").modal("show");
    });
});
