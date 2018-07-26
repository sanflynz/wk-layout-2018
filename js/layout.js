$(document).ready(function(){
  $(".dropdown").hover(function() { 
      var parent = $(this).closest("li.dropdown");
      parent.addClass("active");
      $('.dropdown-menu', this).fadeIn("fast");
    },
    function() { 
      var parent = $(this).closest("li.dropdown");
      parent.removeClass("active");
      $('.dropdown-menu', this).fadeOut("fast");
  });

  $(document).scroll(function(){
       $('.navbar-fixed-top').toggleClass('scrolled', $(this).scrollTop() > 45);
   });

  $(".megamenu-content").hover(function(){
    var parent = $(this).closest("li.dropdown");
    parent.addClass("active");
  },
  function(){
    var parent = $(this).closest("li.dropdown");
    parent.removeClass("active");
  });

  $(".promo-card").hover(function(){
    var badge = $(this).children("a.btn-promo-badge");
    badge.addClass('active');
  },
  function(){
    var badge = $(this).children("a.btn-promo-badge");
    badge.removeClass('active');
  });

  // $(".footer-header").click(function(){
  //   console.log("clicked footer!")
  // });

  $(".footer-group").on("click", ".footer-header", function(){
    //console.log("clicked footer!")
    $(this).next(".footer-list").toggle();
  });



});