document.addEventListener('DOMContentLoaded', function () {
    var signInBtn = document.getElementById('signInBtn');
    var modal = document.getElementById('modal');
    var closeBtn = document.getElementById('closeBtn');

    signInBtn.addEventListener('click', function () {
        console.log("Sign in clicked");
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    var signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });
});
