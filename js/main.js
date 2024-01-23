document.addEventListener('DOMContentLoaded', function () {
  fetch('/views/header.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('headerContainer').innerHTML = data;

          const currentPage = window.location.pathname.split('/').pop().split('.')[0];
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          document.getElementById(`nav-${currentPage}`).classList.add('active');
        });

  fetch('/views/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footerContainer').innerHTML = data;
      });

});


  




