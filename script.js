$(document).ready(function () {
    $("#orderBtn").click(function () {
      alert("Thanks for placing your order! 🛵🍕");
    });
  
    $(".offer-box").click(function () {
      let offer = $(this).data("offer");
      alert(offer); 
    });
  
    $(".offer-box").hover(
      function () {
        $(this).css("background-color", "#ffd580");
      },
      function () {
        $(this).css("background-color", "#ffe1b3");
      }
    );
  
    $('#slide-box').slideDown(1000);
  });
  