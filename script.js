$(document).ready(function(){
  $("#orderBtn").click(function(){
    alert("Thanks for placing your order! \uD83D\uDEF5\uD83C\uDF55")}),
  
  $(".offer-box").click(function(){
    alert($(this).data("offer"))}),
  
  $(".offer-box").hover(function(){
    $(this).css("background-color","#ffd580")},
    
    function(){$(this).css("background-color","#ffe1b3")}),
    
    $("#slide-box").slideDown(1e3)
  });