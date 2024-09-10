    // Function to show sidebar menu
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const menuItems = document.querySelectorAll('.sidebar li:not(.hideOnMobile)');
        sidebar.style.display = 'flex';
        menuItems.forEach(item => {
          item.style.display = 'flex';
        });
        document.body.classList.add('sidebar-open');
      }
  
      // Function to hide sidebar menu
      function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
      const menuItems = document.querySelectorAll('.sidebar li:not(.hideOnMobile)');
      if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
        menuItems.forEach(item => {
          item.style.display = 'none';
        });
        document.body.classList.remove('sidebar-open');
      } else {
        sidebar.style.display = 'flex';
        menuItems.forEach(item => {
          item.style.display = 'flex';
        });
        document.body.classList.add('sidebar-open');
      }
    }
    

  //carousel js
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideElement");
  var screenWidth = window.innerWidth;
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "flex";
    }


//JavaScript to toggle content
document.querySelectorAll('.toggle-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.classList.toggle('active');
  });
  });